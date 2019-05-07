var imagenes = [];
imagenes["100"] = "cien.jpg";
imagenes["50"] = "cincuenta.jpg";
imagenes["20"] = "veinte.jpg";
imagenes["10"] = "diez.jpg";
imagenes["5"] = "cinco.jpg";
imagenes["2"] = "dos.jpg";
imagenes["1"] = "uno.jpg";

class Billete
{
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;

    this.imagen.src = imagenes[this.valor];
  }
}

function retirarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
    }

  }
    if(dinero > 0)
  {

    resultado.innerHTML = "Soy un cajero pobre y no tengo dinero";
  }

    else
    {
      for(var e of entregado)
      {

        if (e.cantidad > 0)
        {
          resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br/>" + "<img src=" + e.imagen.src + " />" + "<hr />";
        }

      }
    }


}
var caja = [];
var entregado = [];
caja.push( new Billete(100, 20) );
caja.push( new Billete(50, 30) );
caja.push( new Billete(20, 20) );
caja.push( new Billete(10, 20) );
caja.push( new Billete(5, 50) );
caja.push( new Billete(2, 50) );
caja.push( new Billete(1, 100) );
var dinero = 0;
var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
var b = document.getElementById("retirar");
var t = document.getElementById("dinero");
b.addEventListener("click", retirarDinero);
t.addEventListener("enter", retirarDinero);
