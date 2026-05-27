# Landing Page Araguaia Poços — Manual de Instalação

## O que você tem em mãos
Uma página única, leve (~30KB), responsiva, otimizada para conversão e rastreamento. Pronta para subir em qualquer hospedagem.

## Antes de publicar — 6 substituições obrigatórias

Abra o arquivo `index.html` em qualquer editor (Bloco de Notas mesmo) e use Ctrl+F para localizar e substituir:

| Localizar | Substituir por | Onde pegar |
|---|---|---|
| `PIXEL_ID` | ID do seu Pixel do Meta | business.facebook.com → Eventos → Pixels |
| `GA_ID` | ID GA4 (ex: G-XXXXXXX) | analytics.google.com |
| `ADS_ID` | ID Google Ads (ex: 123456789) | ads.google.com → ⚙️ → ID da conta |
| `5564000000000` | WhatsApp da Araguaia com DDI+DDD (sem zero) | (3 ocorrências) |
| ~~`SEU_ENDPOINT_AQUI`~~ | ✅ JÁ CONFIGURADO: `xvzyvdzy` | Formspree ativo |
| `araguaiapocos.com.br` | Seu domínio real | (3 ocorrências) |

## Hospedagem recomendada (custo: R$ 0 a R$ 50)

### Opção A — Grátis (recomendada para começar)
1. Criar conta em **Vercel** (vercel.com) ou **Netlify** (netlify.com)
2. Arrastar a pasta `landing-page` para o painel
3. Pegar o link gerado (ex: araguaia-pocos.vercel.app)
4. Conectar domínio próprio depois (~R$ 40/ano em registro.br)

### Opção B — Domínio próprio direto
1. Comprar `araguaiapocos.com.br` em **registro.br** (R$ 40/ano)
2. Hospedar grátis na Vercel/Netlify e apontar o domínio
3. Total ano 1: ~R$ 40

## Receber os leads (formulário)

**Caminho mais rápido (grátis):**
1. Criar conta em **formspree.io** (50 leads/mês grátis)
2. Criar formulário, copiar endpoint (ex: `https://formspree.io/f/abc123`)
3. Colar no código onde está `SEU_ENDPOINT_AQUI`
4. Pronto — leads chegam direto no seu email + você é redirecionado para WhatsApp

**Caminho avançado (escala):**
Webhook para Make.com ou n8n → grava no Google Sheets + envia notificação no Telegram + cria card no Trello/Notion. Eu te ajudo a montar quando estiver na hora.

## UTMs — o segredo da sua comissão

Cada link de anúncio precisa ter UTMs para você provar de qual fonte veio o lead.

**Exemplos:**
- Meta Ads: `https://araguaiapocos.com.br/?utm_source=meta&utm_medium=cpc&utm_campaign=fazenda_go&utm_content=video_perfuratriz`
- Google Search: `https://araguaiapocos.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=poco_artesiano_go&utm_term=poco+artesiano+anapolis`
- Instagram bio: `https://araguaiapocos.com.br/?utm_source=instagram&utm_medium=bio`

A landing captura essas UTMs e envia junto com cada lead. Isso é sua prova viva de que o lead veio pela sua campanha.

## Teste antes de divulgar
1. Abrir o site no celular
2. Preencher o formulário com dados teste
3. Confirmar que recebeu email + foi redirecionado para WhatsApp
4. Testar o botão flutuante do WhatsApp
5. Conferir que o Pixel está disparando (extensão Meta Pixel Helper no Chrome)
