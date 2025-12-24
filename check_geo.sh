#!/bin/bash

echo "🔍 GEO Protocol Validation Checking..."

# 1. Check Robots.txt
echo "----------------------------------------"
echo "1. Checking robots.txt..."
if curl -s "http://localhost:3000/robots.txt" | grep -q "OAI-SearchBot"; then
    echo "✅ OAI-SearchBot found in robots.txt"
else
    echo "❌ OAI-SearchBot configuration MISSING"
fi

# 2. Check Sitemap
echo "----------------------------------------"
echo "2. Checking Sitemap..."
if curl -s "http://localhost:3000/sitemap.xml" | grep -q "solutions/avocat"; then
    echo "✅ Dynamic Routes found in sitemap"
else
    echo "❌ Dynamic Routes MISSING (Result: $(curl -s "http://localhost:3000/sitemap.xml" | grep "solutions"))"
fi

# 3. Check LLM.txt
echo "----------------------------------------"
echo "3. Checking llms.txt..."
if curl -s "http://localhost:3000/llms.txt" | grep -q "content.md"; then
    echo "✅ llms.txt linked to content.md"
else
    echo "❌ llms.txt content missing or wrong link"
fi

# 4. Check JSON-LD
echo "----------------------------------------"
echo "4. Checking JSON-LD (Strict)..."
# Simple check for structure presence
PAGE_CONTENT=$(curl -s "http://localhost:3000")
if echo "$PAGE_CONTENT" | grep -q "application/ld+json"; then
    echo "✅ JSON-LD tag found on Homepage"
else
    echo "❌ JSON-LD tag MISSING on Homepage"
fi

echo "----------------------------------------"
echo "🏁 GEO Check Complete."
