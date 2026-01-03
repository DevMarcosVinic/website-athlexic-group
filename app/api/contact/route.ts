import { NextRequest, NextResponse } from 'next/server';
import { ContactFormSchema } from '@/schemas/contact';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // 1. Server-side Validation (Segurança contra Injection)
        const result = ContactFormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Dados inválidos', details: result.error.errors },
                { status: 400 }
            );
        }

        const { name, email, whatsapp, company, message } = result.data;
        const webhookUrl = process.env.WEBHOOK_URL;

        if (!webhookUrl) {
            console.error("ERRO CRÍTICO: WEBHOOK_URL não definida nas variáveis de ambiente.");
            return NextResponse.json(
                { error: 'Erro de configuração interna.' },
                { status: 500 }
            );
        }

        // 2. Envio para Webhook com Timeout (Evita que o site trave)
        try {
            // Cria um controller para abortar a requisição se demorar mais de 10s
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    whatsapp,
                    company,
                    message,
                    timestamp: new Date().toISOString(),
                    source: 'Athexic Group Website',
                    // Adicione metadados úteis para o CRM
                    userAgent: req.headers.get('user-agent') || 'Unknown'
                }),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`Webhook respondeu com status: ${response.status}`);
            }

        } catch (webhookError) {
            console.error("Falha ao conectar com automação:", webhookError);
            // Retornamos erro para o frontend saber que falhou
            return NextResponse.json(
                { error: 'Não foi possível enviar sua mensagem no momento. Tente pelo WhatsApp.' },
                { status: 502 } // Bad Gateway
            );
        }

        return NextResponse.json({ success: true, message: 'Recebido com sucesso' });

    } catch (error) {
        console.error("API Error Critical:", error);
        return NextResponse.json(
            { error: 'Erro interno no servidor' },
            { status: 500 }
        );
    }
}