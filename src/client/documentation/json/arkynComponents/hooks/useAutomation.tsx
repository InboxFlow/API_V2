import { DocStructureType } from "~/client/types";

const useAutomationJson: DocStructureType = {
  title: "useAutomation",
  sections: [
    {
      paragraphs: [
        {
          type: "text",
          content: `Um hook que irá monitorar suas chamadas https, retorno de funções e formulários, criando uma automação para cada tipo de "ação" disparada. <code>useAutomation()</code> irá criar as seguintes automações:`,
        },
        {
          type: "note",
          content:
            "Este hook funciona apenas para formulários comuns (utilizando <code>Form</code> ou <code>useSubmit<code>), não funcionando em formulários disparados por um <code>useFetcher</code>.",
          title: "Aviso!",
          scheme: "warning",
        },
        {
          type: "text",
          content: `<strong>Disparo de toasts manuais -</strong> o hook irá disparar toasts a partir de um retorno de uma action, desde que o hook esteja na mesma rota de onde a ação foi disparada.`,
        },
        {
          type: "text",
          content: `<strong>Disparo de toasts de erro -</strong> toasts de erro também serão disparados de forma automática. (Ao lançar exceções disponibilizadas pelo pacote <code>@arkyn/server</code>).`,
        },
        {
          type: "text",
          content: `<strong>Fechamento de um único modal através de chave -</strong> ao retornar de sua ação um objeto que contenha a chave: <code>closeModalKey</code> o hook irá fechar o modal que tenha a key identica a fornecida.`,
        },
        {
          type: "text",
          content: `<strong>Fechamento de todos os modais através de URL -</strong> caso o hook identifique que na URL haja um parâmetro de busca <code>closeAllModals</code> com o valor <code>true</code>, todos os modais abertos serão fechados, atualizando a página e removendo todos os parâmetros.`,
        },
        {
          type: "text",
          content: `<strong>Fechamento de todos os modais através de chave -</strong> ao retornar de sua ação um objeto que contenha a chave: <code>closeAllModals</code> com o valor <code>true</code> o hook irá fechar todos os modais abertos.`,
        },
        {
          type: "text",
          content: `<strong>Scroll da página até um controlador de formulário -</strong> ao retornar de sua ação um objeto que contenha a chave: <code>scrollTo</code> com o valor de um nome de campo de formulário existente na tela (EX: input, select, textatea, etc...) que esteja dentro de um controlador de formulário, o hook irá scrollar o usuário até o campo em questão.`,
        },
      ],
    },
    {
      title: "Importação",
      paragraphs: [
        {
          type: "fence",
          language: "js",
          languageType: "tsx",
          content: `import { useAutomation } from "@arkyn/components";`,
        },
      ],
    },
    {
      title: "Uso",
      paragraphs: [
        {
          type: "fence",
          language: "js",
          languageType: "tsx",
          content: `useAutomation();`,
        },
      ],
    },
  ],
};

export { useAutomationJson };
