# Exemplo de Tema com Expo + TypeScript + Zustand

Projeto que implementa:

* Expo + TypeScript
* Navegação Stack entre duas telas (React Navigation)
* Tema claro/escuro global com **Zustand**
* Persistência do tema com **AsyncStorage** (middleware persist do Zustand)

---

## Estrutura de Arquivos (copie para o seu projeto)

```
expo-zustand-theme/
├─ App.tsx
├─ package.json
├─ tsconfig.json
├─ babel.config.js
└─ src/
   ├─ navigation/StackNavigator.tsx
   ├─ screens/HomeScreen.tsx
   ├─ screens/SecondScreen.tsx
   └─ store/themeStore.ts
```

## tsconfig.json

Configuração básica do TypeScript.

---

## babel.config.js

Configuração padrão do Babel usada pelo Expo.

---

## src/store/themeStore.ts

Define o estado global do tema (claro/escuro) usando **Zustand** e o middleware **persist** para salvar o tema selecionado com o **AsyncStorage**.

---

## src/navigation/StackNavigator.tsx

Configura a navegação Stack entre duas telas: **Home** e **Second**.

---

## src/screens/HomeScreen.tsx

Tela inicial que exibe o tema atual e um botão para alternar entre os modos claro e escuro. Também possui um botão para navegar até a segunda tela.

---

## src/screens/SecondScreen.tsx

Exibe o tema atual aplicado, alterando as cores de fundo e texto de acordo com o tema selecionado.

---

## App.tsx

Integra tudo: o tema global, a navegação e a barra de status. O tema é aplicado dinamicamente em toda a aplicação com base no estado do **Zustand**.

---

## Como executar o projeto

1. Execute o comando para instalar as dependências:

```
npm install
```

2. Instale os pacotes nativos requeridos pelo React Navigation e AsyncStorage:

```
expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context @react-native-async-storage/async-storage
npm install zustand
```

3. Inicie o aplicativo:

```
npx expo start
```

Abra no emulador ou no aplicativo **Expo Go**.

---

## Observações

* O `persist` do Zustand usa o armazenamento definido em `getStorage`. Para React Native, use o **AsyncStorage**.
* O estado do tema é persistido automaticamente, mantendo o mesmo modo (claro ou escuro) mesmo após fechar o aplicativo.
* O tema é aplicado imediatamente em todas as telas quando alterado.
