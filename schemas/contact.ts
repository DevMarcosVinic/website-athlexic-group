import { z } from 'zod';

export const ContactFormSchema = z.object({
    name: z.string()
        .min(2, { message: "Nome deve ter pelo menos 2 caracteres." })
        .max(100, { message: "Nome excede o limite de caracteres." })
        .trim(),

    email: z.string()
        .email({ message: "Email inválido." })
        .max(255)
        .trim()
        .toLowerCase(),

    whatsapp: z.string()
        .min(10, { message: "WhatsApp inválido (mínimo 10 dígitos)." })
        .max(20, { message: "WhatsApp inválido." })
        .regex(/^[\d\s\+\-\(\)]+$/, { message: "Apenas números e símbolos (+, -, parênteses)." }),

    // FIX: Simplificamos aqui. Removemos o .transform() para evitar erro de build.
    // O formulário enviará "" (string vazia) se não preenchido, o que é aceitável.
    company: z.string()
        .max(100)
        .optional(),

    message: z.string()
        .min(10, { message: "A mensagem deve ser mais detalhada." })
        .max(2000, { message: "Mensagem muito longa (máximo 2000 caracteres)." })
        .trim(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;