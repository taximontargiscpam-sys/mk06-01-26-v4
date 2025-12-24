import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Base rules for all bots
            {
                userAgent: '*',
                allow: ['/', '/llms.txt'],
                disallow: ['/private/', '/api/', '/_next/'],
            },
            // OpenAI Search Bot (Used for SearchGPT / ChatGPT Search features)
            // Doc: https://platform.openai.com/docs/bot/oai-searchbot
            {
                userAgent: 'OAI-SearchBot',
                allow: ['/'],
            },
            // OpenAI Training Bot (Used for model training)
            // Doc: https://platform.openai.com/docs/gptbot
            {
                userAgent: 'GPTBot',
                allow: ['/', '/llms.txt'],
            },
            // Other Common Crawlers & AI Bots
            {
                userAgent: ['CCBot', 'Google-Extended', 'ClaudeBot', 'PerplexityBot'],
                allow: ['/', '/llms.txt'],
            }
        ],
        sitemap: 'https://mkdigitalparis.com/sitemap.xml',
    }
}
