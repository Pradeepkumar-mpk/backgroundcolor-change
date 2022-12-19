const container = document.createElement("div");
document.body.append(container);
container.style.display="flex";
container.style.justifyContent="center";
container.style.alignItems="center";
container.style.marginTop="300px";

const btn = document.createElement("button")
container.appendChild(btn);
btn.type="button";
btn.innerHTML="change background";
btn.style.backgroundColor="lightseagreen";
btn.style.border="3px solid lightblue";
btn.style.padding="5px";
btn.style.borderRadius="10px"
btn.onclick=function(){
	const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
	document.body.style.background = "rgb("+red+","+green+","+blue+")";
}
