# 🎨 Padrão Visual da Landing — Identidade Araguaia

## Paleta extraída do Instagram

| Cor | HEX | Uso |
|---|---|---|
| 🔵 Azul Marinho | `#06304f` | Header, footer, títulos principais |
| 🟦 Azul | `#0a4a7a` | Gradientes hero, logo |
| 🩵 Azul Médio | `#1e7bbd` | Detalhes, links, acentos |
| 💧 Azul Claro | `#7dd3fc` | Highlights, gota d'água, faith mark |
| 🌫️ Azul Suave | `#e0f2fe` | Backgrounds suaves, blocos especiais |
| 🟢 Verde | `#16a34a` | CTAs principais, "garantia" |
| 🟢 Verde Escuro | `#0e7c36` | Topbar, gradientes verde |
| 🟡 Amarelo | `#f59e0b` | Badges urgência ("⚡ GRÁTIS") |
| ⚪ Branco | `#ffffff` | Cards, fundo principal |

## Tipografia

- **Fonte:** Poppins (Google Fonts) — moderna, amigável, alinhada ao tom do Instagram
- **Pesos:** 400 (normal), 500, 600, 700, 800 (negrito forte)
- **Carregada via:** `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins...">`

## Elementos visuais aplicados

### 1. Logo SVG embutido
Criei um logo placeholder (gota d'água azul em círculo branco + texto "ARAGUAIA / Poços Artesianos").
- Aparece no header e footer
- Ícone: gota com camadas (azul escuro → azul médio → reflexo azul claro)
- **Como substituir pelo logo real:** veja seção abaixo

### 2. Ondas no Hero
Adicionei uma SVG de ondas na base do hero (transição azul → branco) — remete a água.

### 3. Gradientes de água
Backgrounds de seções com gradientes azuis em diagonal, lembrando movimento de água.

### 4. Blocos de água nos tipos de poço
Cada card de tipo (Residencial/Rural/Industrial) tem fundo gradiente azul com ondas sutis.

### 5. Faith mark "Deus é Fiel"
- No hero (sutil, abaixo dos CTAs)
- No footer (com emoji 🙏)
- Cria identificação com público religioso interior sem afastar quem não é

### 6. Galeria de obras (placeholder)
Seção nova com 8 quadradinhos prontos para receber suas fotos reais.

---

## 🖼️ COMO SUBSTITUIR O LOGO PLACEHOLDER PELO LOGO REAL

Quando você tiver o logo da Araguaia em PNG/JPG (idealmente PNG com fundo transparente, 200×200px ou maior):

### Passo 1 — Salvar o logo
Coloque o arquivo `logo.png` dentro da pasta `landing-page/`

### Passo 2 — Trocar no HTML
Abra o `index.html` e procure por `<!-- LOGO SVG (substituir por...)`.

**Substituir este bloco:**
```html
<div class="logo-circle">
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 8 C30 38 18 56 18 70 a32 32 0 0 0 64 0 c0-14-12-32-32-62z" fill="#0a4a7a"/>
    <path d="M50 28 C40 44 32 56 32 66 a18 18 0 0 0 36 0 c0-10-8-22-18-38z" fill="#1e7bbd"/>
    <ellipse cx="42" cy="52" rx="5" ry="10" fill="#7dd3fc" opacity=".7"/>
  </svg>
</div>
```

**Por este:**
```html
<div class="logo-circle">
  <img src="logo.png" alt="Araguaia Poços Artesianos" style="width:100%;height:100%;object-fit:contain;padding:4px" />
</div>
```

Fazer isso 2 vezes (uma no header, outra no footer).

---

## 🖼️ COMO SUBSTITUIR A GALERIA DE OBRAS

### Passo 1 — Preparar fotos
- 8 fotos quadradas (idealmente 800×800px)
- Nomes: `obra-1.jpg`, `obra-2.jpg`, ... até `obra-8.jpg`
- Colocar dentro da pasta `landing-page/`
- Comprimir antes (use tinypng.com — grátis) — peso máximo 200KB cada

### Passo 2 — Trocar no HTML
Procure pelo bloco `<div class="galeria-grid">` e substitua os divs por:

```html
<div class="galeria-grid">
  <div class="galeria-item"><img src="obra-1.jpg" alt="Obra 1" style="width:100%;height:100%;object-fit:cover;border-radius:10px" /></div>
  <div class="galeria-item"><img src="obra-2.jpg" alt="Obra 2" style="width:100%;height:100%;object-fit:cover;border-radius:10px" /></div>
  <div class="galeria-item"><img src="obra-3.jpg" alt="Obra 3" style="width:100%;height:100%;object-fit:cover;border-radius:10px" /></div>
  <div class="galeria-item"><img src="obra-4.jpg" alt="Obra 4" style="width:100%;height:100%;object-fit:cover;border-radius:10px" /></div>
  <div class="galeria-item"><img src="obra-5.jpg" alt="Obra 5" style="width:100%;height:100%;object-fit:cover;border-radius:10px" /></div>
  <div class="galeria-item"><img src="obra-6.jpg" alt="Obra 6" style="width:100%;height:100%;object-fit:cover;border-radius:10px" /></div>
  <div class="galeria-item"><img src="obra-7.jpg" alt="Obra 7" style="width:100%;height:100%;object-fit:cover;border-radius:10px" /></div>
  <div class="galeria-item"><img src="obra-8.jpg" alt="Obra 8" style="width:100%;height:100%;object-fit:cover;border-radius:10px" /></div>
</div>
```

E remova o bloco `<div class="galeria-info">` (mensagem para o gestor).

---

## 📸 SUGESTÃO DE FOTOS A USAR NA GALERIA

Para máximo impacto, use combinação de:

1. **Perfuratriz em operação** — mostra equipamento próprio
2. **Água saindo no fim da perfuração** — a "foto vitória"
3. **Equipe no local** — mostra time trabalhando
4. **Vista da propriedade pronta** — paisagem com poço
5. **Detalhe do laudo/ART** — autoridade técnica
6. **Cliente satisfeito** (com autorização) — prova social
7. **Caminhão da empresa** — branding em campo
8. **Engenheira Lorrayne em obra** — autoridade técnica + diferencial

---

## 🎨 SE QUISER MUDAR ALGUMA COR DEPOIS

Todas as cores estão definidas no início do CSS dentro de `:root`. É só achar a variável e trocar o valor HEX:

```css
:root{
  --azul-marinho:#06304f;   ← muda aqui se quiser azul diferente
  --verde:#16a34a;           ← muda aqui se quiser outro tom de verde
  ...
}
```

Salva o arquivo, recarrega no navegador, pronto.
