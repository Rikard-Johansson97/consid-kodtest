export const KlarnaHtml = (snippet : any) => {
  return `
     <html>
     <head> </head>
  
     <body>
     <textarea style="display: none" id="KCO">
              ${snippet}
      </textarea
        >
  
        <div id="my-checkout-container"></div>
  
        <!-- START - Dont edit -->
        <script type="text/javascript">
           var checkoutContainer = document.getElementById(
              "my-checkout-container"
           );
           checkoutContainer.innerHTML = document
              .getElementById("KCO")
              .value.replace(/\\"/g, '"')
              .replace(/\\n/g, "");
           var scriptsTags = checkoutContainer.getElementsByTagName("script");
           for (var i = 0; i < scriptsTags.length; i++) {
              var parentNode = scriptsTags[i].parentNode;
              var newScriptTag = document.createElement("script");
              newScriptTag.type = "text/javascript";
              newScriptTag.text = scriptsTags[i].text;
              parentNode.removeChild(scriptsTags[i]);
              parentNode.appendChild(newScriptTag);
           }
        </script>
        <!-- END -->
     </body>
  </html>
  
     `;
};
