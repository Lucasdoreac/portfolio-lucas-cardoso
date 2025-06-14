# 🚀 Guia de Deploy - GitHub Pages

Este documento contém instruções detalhadas para fazer o deploy do portfólio no GitHub Pages.

## 📋 Pré-requisitos

- [ ] Conta no GitHub
- [ ] Git instalado localmente
- [ ] Screenshots do projeto organizadas

## 🔧 Configuração do Repositório

### 1. Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em **"New repository"**
3. Configure:
   - **Nome:** `portfolio-lucas-cardoso`
   - **Descrição:** `Portfólio profissional - Desenvolvedor Full Stack`
   - **Visibilidade:** Public
   - **README:** Não adicionar (já temos)
   - **gitignore:** Não adicionar
   - **License:** MIT License

### 2. Configurar Git Local

```bash
# Navegue até a pasta do projeto
cd /Users/lucascardoso/apps/MCP/lu/portfolio-lucas-cardoso

# Inicializar repositório Git
git init

# Adicionar remote origin (substitua 'lucascardoso' pelo seu username)
git remote add origin https://github.com/lucascardoso/portfolio-lucas-cardoso.git

# Configurar branch principal
git branch -M main
```

### 3. Organizar Screenshots

Antes do primeiro commit, certifique-se de que as screenshots estão na pasta correta:

```bash
# Verificar se as imagens existem
ls -la assets/images/screenshots/

# Se necessário, adicionar screenshots manualmente:
# - homepage-desktop-light-theme.png
# - homepage-desktop-light.png (tema escuro)
# - homepage-mobile-responsive.png
# - calculator-investments-functioning.png
# - calculator-educational-demo.png
```

### 4. Primeiro Commit

```bash
# Adicionar todos os arquivos
git add .

# Verificar status
git status

# Fazer o primeiro commit
git commit -m "feat: Adicionar portfólio inicial com sistema de temas dinâmico

- Página principal com design responsivo
- Sistema de temas claro/escuro
- Página detalhada do projeto financeiro
- Screenshots de demonstração
- Configuração para GitHub Pages"

# Fazer push para GitHub
git push -u origin main
```

## 🌐 Configurar GitHub Pages

### 1. Ativar GitHub Pages

1. No repositório GitHub, vá para **Settings**
2. Role até a seção **Pages** (no menu lateral)
3. Configure:
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)
4. Clique em **Save**

### 2. Aguardar Deploy

- O GitHub levará alguns minutos para fazer o deploy
- Você receberá um link como: `https://lucascardoso.github.io/portfolio-lucas-cardoso`
- O status do deploy aparecerá na seção **Environments** do repositório

### 3. Verificar Site Online

Após o deploy, acesse o link fornecido e verifique:
- [ ] Página carrega corretamente
- [ ] Sistema de temas funciona
- [ ] Imagens são exibidas
- [ ] Links de navegação funcionam
- [ ] Versão mobile está responsiva

## 📱 Configurações Avançadas

### Custom Domain (Opcional)

Se você tiver um domínio próprio:

1. Crie um arquivo `CNAME` na raiz:
   ```
   seudominio.com
   ```

2. Configure o DNS do seu domínio:
   ```
   Type: CNAME
   Name: www (ou @)
   Value: lucascardoso.github.io
   ```

### Google Analytics (Opcional)

1. Crie uma conta no Google Analytics
2. Obtenha o ID de acompanhamento
3. Adicione o código no `_config.yml`:
   ```yaml
   google_analytics: "G-XXXXXXXXXX"
   ```

### Meta Tags para SEO

O portfólio já inclui meta tags básicas, mas você pode adicionar:

```html
<!-- No <head> das páginas -->
<meta property="og:image" content="URL_DA_IMAGEM_DE_PREVIEW">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@seutwitter">
```

## 🔄 Workflow de Atualizações

### Para atualizações futuras:

```bash
# Fazer mudanças nos arquivos
# ...

# Adicionar alterações
git add .

# Commit descritivo
git commit -m "feat: Adicionar novo projeto X

- Screenshots do projeto
- Página detalhada
- Atualização da homepage"

# Push para GitHub
git push origin main
```

O GitHub Pages atualizará automaticamente após cada push.

## 📊 Monitoramento

### Verificar Status do Site

1. **GitHub Actions** (se configurado):
   - Vá para a aba "Actions" no repositório
   - Monitore os builds automáticos

2. **Google Search Console** (recomendado):
   - Adicione o site para monitorar SEO
   - Submeta o sitemap

3. **Performance**:
   - Use Google PageSpeed Insights
   - Teste em diferentes dispositivos

## 🛠️ Troubleshooting

### Problemas Comuns

1. **Site não carrega:**
   - Verifique se GitHub Pages está ativo
   - Confirme se o branch está correto
   - Aguarde até 20 minutos para propagação

2. **Imagens não aparecem:**
   - Verifique os caminhos relativos
   - Confirme se as imagens foram commitadas
   - Teste localmente primeiro

3. **CSS/JS não funciona:**
   - Verifique links relativos vs absolutos
   - Confirme se não há erros no console
   - Teste em modo privado do navegador

4. **404 em subpáginas:**
   - Confirme estrutura de pastas
   - Verifique links internos
   - Teste navegação local

### Comandos Úteis

```bash
# Verificar status do repositório
git status

# Ver histórico de commits
git log --oneline

# Testar localmente
python -m http.server 8000

# Verificar links quebrados (instalar linkchecker)
linkchecker http://localhost:8000
```

## ✅ Checklist Final

Antes de considerar o deploy completo:

- [ ] Repositório criado e configurado
- [ ] Primeiro commit realizado
- [ ] GitHub Pages ativado
- [ ] Site acessível online
- [ ] Todas as páginas funcionam
- [ ] Sistema de temas funciona
- [ ] Imagens carregam corretamente
- [ ] Links internos funcionam
- [ ] Versão mobile testada
- [ ] Meta tags configuradas
- [ ] README.md atualizado
- [ ] Contatos atualizados

## 🎯 Próximos Passos

Após o deploy bem-sucedido:

1. **Compartilhar o portfólio** em redes profissionais
2. **Adicionar mais projetos** conforme necessário
3. **Monitorar analytics** para melhorias
4. **Atualizar conteúdo** regularmente
5. **Coletar feedback** e iterar

---

📧 **Dúvidas?** Entre em contato ou crie uma issue no repositório.