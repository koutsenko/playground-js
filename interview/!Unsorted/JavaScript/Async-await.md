# Async await
2021-11-05 09:06:49
            
---


1.  В корне файла async main может быть задекларирована, а вот await в старых версиях node
> не работает, поэтому можно его вызвать так
>
> 

<table><colgroup><col style="width: 100%" /></colgroup><thead><tr class="header"><th><p>main()</p><p>
 .then(() =&gt; process.exit(0))</p><p>
 .catch((error) =&gt; {</p><p>
 
 console.error(error);</p><p>
 
 process.exit(1);</p><p>
 });</p></th></tr></thead><tbody></tbody></table>




