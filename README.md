# Trackeio

Aplicativo de gestão financeira pessoal desenvolvido em React Native.

## Estrutura do Projeto

```
Trackeio/
├── src/
│   ├── colors.ts          # Cores globais do app
│   ├── screens/
│   │   └── SplashScreen.tsx  # Tela de splash inicial
│   └── types/
│       └── navigation.ts     # Tipos para navegação
├── App.tsx                # Componente principal com navegação
└── package.json
```

## Cores do App

- **Primária**: #4A90E2 (Azul suave - botões, links)
- **Secundária**: #50E3C2 (Verde-água - ações positivas)
- **Erro/Alerta**: #FF6B6B (Vermelho claro - erros/gastos)
- **Texto escuro**: #1C1C1E (Quase preto - modo claro)
- **Texto claro**: #FFFFFF (Para modo escuro)
- **Plano de fundo**: #F5F7FA (Cinza bem claro - modo claro)
- **Fundo escuro**: #121212 (Para modo dark)
- **Cinza neutro**: #A0A0A0 (Ícones, separadores, detalhes)

## Tecnologias Utilizadas

- React Native 0.79.0
- React Navigation 6
- TypeScript
- React Native Windows (suporte)

## Como Executar

### NPM
```bash
npm start -- --reset-cache
```

### Windows
```bash
npm run windows
```

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

## Status Atual

- ✅ Configuração inicial do projeto
- ✅ Navegação nativa configurada
- ✅ Tela de splash criada
- ✅ Sistema de cores implementado
- ⏳ Próximas telas a serem desenvolvidas
