https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA/ARIA_Techniques

# ARIA techniques
O ARIA define as semânticas que podem ser aplicadas aos elementos, e são divididas em funções (definindo um tipo de elemento da interface do usuário) e estados e propriedades que são suportados por uma função. Os autores devem atribuir uma função ARIA e os estados e propriedades apropriados a um elemento durante seu ciclo de vida, a menos que o elemento já possua semântica ARIA apropriada (através do uso de um elemento HTML apropriado). A adição de semântica ARIA apenas expõe informações extras para a API de acessibilidade de um navegador e não afeta o DOM de uma página.

## Funções:

## Funções de widget
button
checkbox
gridcell
link
menuitem
menuitemcheckbox 
menuitemradio
option
progressbar
radio
scrollbar
searchbox
separator (when focusable)
slider
spinbutton
switch
tab
tabpanel
textbox
treeitem

## Funções compostas
As técnicas abaixo descrevem cada função composta, bem como suas funções filho obrigatórias e opcionais.

combobox
grid (incluindo as funções row, gridcell, rowheader, columnheader)
listbox (incluindo a função option)
menu
menubar
radiogroup (veja a função radio)
tablist (incluindo as funções tab and tabpanel)
tree
treegrid

## Funções da estrutura de documento
application
article
cell
columnheader
definition
directory
document
feed
figure
group
heading
img
list
listitem
math
none
note
presentation
row
rowgroup
rowheader
separator
table
term
textbox
toolbar
tooltip

## Funções de ponto de referência
banner
complementary
contentinfo
form
main
navigation
region
search

## Funções de regiões ativa
alert
log
marquee
status
timer

## Funções de janela
alertdialog
dialog
Estados e propriedades
Atributos de widget
aria-autocomplete
aria-checked
aria-current
aria-disabled
aria-errormessage
aria-expanded
aria-haspopup
aria-hidden
aria-invalid
aria-label
aria-level
aria-modal
aria-multiline
aria-multiselectable
aria-orientation
aria-placeholder
aria-pressed
aria-readonly
aria-required
aria-selected
aria-sort
aria-valuemax
aria-valuemin
aria-valuenow
aria-valuetext

## Atributos da região ativa
aria-live
aria-relevant
aria-atomic
aria-busy

## Atributos de drag & drop
aria-dropeffect
aria-dragged

## Atributos de relacionamento
aria-activedescendant
aria-colcount
aria-colindex
aria-colspan
aria-controls
aria-describedby
aria-details
aria-errormessage
aria-flowto
aria-labelledby
aria-owns
aria-posinset
aria-rowcount
aria-rowindex
aria-rowspan
aria-setsize

## Propriedades específicas do MicrosoftEdge
x-ms-aria-flowfrom 
Last modified: 20 de mai. de 2021, by MDN contributors

© 2005-2021 Mozilla and individual contributors. Content is available under these licenses.
