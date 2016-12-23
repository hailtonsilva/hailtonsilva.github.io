---
layout: default
nav: start
route: index

buttonClasses:
  primary: red
  info: blue
  success: green
  warning: orange
  danger: red
Num1to6:
  1: one
  2: two
  3: three
  4: four
  5: five
  6: six
---


**Start**
----------------------------------------------------

**Layout**
----------------------------------------------------

### Grid
The grid is based on flexbox for convention and flexibility.

The grid is composed by `row` to create an horizontal block to hold the `col`. You can specify the width of each `col` with
`xs#`, `s#`, `m#` and `l#`

{% example html %}
<!-- CAN BE DEFINED AS, 
row top, row center-horizontal, row bottom, row stretch, row baseline, row left, row center, row right, row between
or row around -->
<div class="row center">
  <div class="col m3">col m3</div>
  <div class="col m3">col m3</div>
  <div class="col m3">col m3</div>
  <div class="col m3">col m3</div>
</div>
{% endexample %}

The `row` can be followed by these additional classes: `top`, `center-horizontal`, `bottom`, `stretch`, `baseline`, `left`, 
`center`, `right`, `between`, `around` and they will define how the columns are positioned on the page

{% example html %}
<!-- CAN BE DEFINED AS, 
row top, row center-horizontal, row bottom, row stretch, row baseline, row left, row center, row right, row between
or row around -->
<div class="row center">
  <div class="col s4">col s4</div>
  <div class="col s4">col s4</div>
  <div class="col s4">col s4</div>
  <div class="col m6">col m6</div>
</div>
{% endexample %}

**Typography**
----------------------------------------------------

### headings
{% example html %}
{% for number in page.Num1to6 %}
<h{{ number[0] }}>This is a heading {{ number[1] }} - h{{ number[0] }} </h{{ number[0] }}>
{% endfor %}
{% endexample %}

### Text sizes
{% example html %}
{% for number in page.Num1to6 %}
<p class="size-{{ number[0] }}">This is a paragraph with size {{ number[1] }} - size-{{ number[0] }} </p>
{% endfor %}
{% endexample %}

**Components**
----------------------------------------------------

### Buttons

Buttons are used to represent actions and you can use it with any `html` tag you 
want including `<a>`, `<p>` and `div` tags

{% example html %}
{% for classname in page.buttonClasses %}
<a href="#" class="button {{classname[0]}}"> {{classname[0]}}</a>
{% endfor %}
{% endexample %}


### Outline colors

{% example html %}
{% for classname in page.buttonClasses %}
<a href="#" class="button {{classname[0]}} outline"> {{classname[0]}}</a>
{% endfor %}
{% endexample %}

### Sizes
TODO









