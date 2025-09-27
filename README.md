# Jogo de Adivinhação (JS)

Um jogo simples onde o computador escolhe um número entre 1 e 100 e você tenta adivinhar em até 10 tentativas.

## Como jogar

1. Abra o arquivo `index.html` no seu navegador.
2. Digite um número entre 1 e 100 no campo de palpite.
3. Clique em "Chutar" (ou pressione Enter).
4. Leia as dicas e tente adivinhar antes que as tentativas acabem.

Quando o jogo termina (acerto ou fim de tentativas), clique em "Jogar de novo" para reiniciar.

## Estrutura

- `index.html` — Estrutura HTML e elementos de UI.
- `style.css` — Estilo da página (opcional, mas incluído).
- `script.js` — Lógica do jogo e interações.

## Requisitos atendidos

- Número aleatório entre 1 e 100 usando `Math.random()`.
- Validação do input e mensagens dinâmicas (maior/menor, acerto, derrota).
- Contador de tentativas com máximo de 10.
- Encerramento do jogo ao acertar ou esgotar tentativas; botão para reiniciar.

## Publicar no GitHub

Se quiser versionar e publicar este projeto em um repositório GitHub novo, execute estes passos no PowerShell (na pasta `att`):

```powershell
# 1) Inicialize o repositório local
git init

# 2) Crie um .gitignore simples (opcional)
@"
# Sistema
.DS_Store
Thumbs.db

# Node / IDE (se algum dia usar)
node_modules/
.vscode/
"@ | Set-Content -Encoding UTF8 .gitignore

# 3) Faça o primeiro commit
git add .
git commit -m "feat: jogo de adivinhacao (HTML/CSS/JS)"

# 4) Crie o repositório no GitHub (via site) e copie a URL
# Exemplo: https://github.com/<seu-usuario>/jogo-adivinhacao

# 5) Adicione o remoto e envie
$REMOTE = "https://github.com/<seu-usuario>/jogo-adivinhacao.git"
git branch -M main
git remote add origin $REMOTE
git push -u origin main
```

Caso prefira, posso automatizar isso aqui se você me passar o nome que deseja e confirmar que já está autenticado no GitHub neste computador.
