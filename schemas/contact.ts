import { z } from 'zod';

export const ContactFormSchema = z.object({
    name: z.string()
        .min(2, { message: "Nome deve ter pelo menos 2 caracteres." })
        .max(100, { message: "Nome excede o limite de caracteres." }) // Segurança
        .trim(), // Remove espaços inúteis no início/fim

    email: z.string()
        .email({ message: "Email inválido." })
        .max(255) // Limite padrão de bancos de dados
        .trim()
        .toLowerCase(), // Padroniza para minúsculo

    whatsapp: z.string()
        .min(10, { message: "WhatsApp inválido (mínimo 10 dígitos)." })
        .max(20, { message: "WhatsApp inválido." }) // Impede strings gigantes
        .regex(/^[\d\s\+\-\(\)]+$/, { message: "Apenas números e símbolos (+, -, parênteses)." }), // Impede injeção de texto

    company: z.string()
        .max(100)
        .optional()
        .transform(val => val?.trim() === "" ? undefined : val), // Se vier string vazia, vira undefined

    message: z.string()
        .min(10, { message: "A mensagem deve ser mais detalhada." })
        .max(2000, { message: "Mensagem muito longa (máximo 2000 caracteres)." }) // Proteção contra DoS
        .trim(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;