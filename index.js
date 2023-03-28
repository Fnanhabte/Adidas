const body = document.getElementById('root');
const mainWrapper = document.getElementById('main-wrapper');
const section = document.getElementById('section');
const article = document.getElementById('article');
const footer = document.querySelector('.adidas-footer');

const menDropdown = document.querySelector('.Men-Navigation-for-allLinks');
const womanDropdown = document.querySelector('.Woman-Navigation-for-allLinks');
const kidsDropdown = document.querySelector('.kids-Navigation-for-allLinks');
const salesDropdown = document.querySelector('.sales-Navigation-for-allLinks');
const salesOffData = document.querySelector("div[data-sales='sales']");
const salesUpperTop= document.querySelector('.upperTop-sales-info');
const closeSales= document.querySelector('.close-sales');
const header = document.querySelector('header');
const men = document.querySelector("a[href='/men']");
const kids = document.querySelector("a[href='/kids']");
const sales = document.querySelector("a[href='/sale']");
const woman = document.querySelector("a[href='/woman']");
const searchInput = document.getElementById("search");
const emailInput = document.getElementById("email");
const mobileMunuWrapper = document.querySelector(".icon-wrapper")
const mobileBarIcon = [...document.querySelectorAll(".menu")];
const mobileOpenSideMenu= document.querySelector(".mobile_Navigation");
const mobileCloseSideMenu = document.querySelector(".mane_closeLogo");
const userIcon = document.querySelector(".user-login");
const userLoginForm = document.querySelector(".user-login-form");
const cancelLoginForm = document.querySelector(".cancel");
const userAlertMsg = document.querySelector(".alert");
const quotes = document.getElementById('text-quote');
let index = 0



searchInput.addEventListener('focus', function(e) {
   this.style.outline = `none`;
   this.style.fontSize = '17px'
})
emailInput.addEventListener('focus', function(e) {
   this.style.outline = `none`;
})

const closeDisplay = async () => {
   menDropdown.style.cssText =  `display:none;`;
   men.style.cssText = `text-decoration:none;`;
   woman.style.cssText = `text-decoration:none;`;
   womanDropdown.style.cssText =  `display:none;`;
}

salesOffData.addEventListener('click', function(e){
   const width = window.innerWidth
   if(width <= 954){
      salesUpperTop.style.cssText = `
      animation: upper-dropdown 1s cubic-bezier(0.95, 0.05, 0.795, 0.035) forwards;
      transition: 10s linear; display:flex; position:fixed; height:100vh; overflow-y:scroll;`;
      body.style.cssText = 'overflow-x:hidden;background:black;';
      mainWrapper.style.display = 'none';
      section.style.display = 'none';
      article.style.display = 'none';
      footer.style.display = 'none';
      header.style.display = 'none'
   }else{
      salesUpperTop.style.cssText = `
      animation: upper-dropdown 1s cubic-bezier(0.95, 0.05, 0.795, 0.035) forwards;
      transition: 10s linear; display:flex; position:fixed; height:60vh; overflow-y:scroll;`;
      body.style.cssText = `
      overflow:hidden;background:black;`;
   }

});

const close_Sales = async () => {
   closeSales.addEventListener('click', (e) => {
      salesUpperTop.style.cssText = 'display:none';
      body.style.cssText = 'overflow:auto;';
      section.style.display = '';
      article.style.display = '';
      footer.style.display = '';
      mainWrapper.style.display = 'grid';
      header.style.display = ''
   })
}

close_Sales()

men.addEventListener('mouseover', async function(e){
   menDropdown.style.cssText =  `
   animation: men-dropdown 1s cubic-bezier(0.895, 0.03, 0.685, 0.2) forwards;
   transition: 10s linear;
   display:flex; position:fixed;`;
   womanDropdown.style.cssText =  `display:none;`;
   woman.style.cssText = `text-decoration:none;`;
   kidsDropdown.style.cssText =  `display:none;`;
   kids.style.cssText = `text-decoration:none;`;
   salesDropdown.style.cssText =  `display:none;`;
   sales.style.cssText = `text-decoration:none;`;

});


woman.addEventListener('mouseover', async function(e){
   womanDropdown.style.cssText =  `
   animation: woman-dropdown 1s cubic-bezier(0.895, 0.03, 0.685, 0.2) forwards;
   transition: 10s linear;
   display:flex; position:fixed;
   `;
   menDropdown.style.cssText =  `display:none;`;
   men.style.cssText = `text-decoration:none;`;
   kidsDropdown.style.cssText =  `display:none;`;
   kids.style.cssText = `text-decoration:none;`;
   salesDropdown.style.cssText =  `display:none;`;
   sales.style.cssText = `text-decoration:none;`;
});

kids.addEventListener('mouseover', async function(e){
   kidsDropdown.style.cssText =  `
   animation: kids-dropdown 1s cubic-bezier(0.895, 0.03, 0.685, 0.2) forwards;
   transition: 10s linear;display:flex; position:fixed;`;

   closeDisplay();
   salesDropdown.style.cssText =  `display:none;`;
   sales.style.cssText = `text-decoration:none;`;
});

sales.addEventListener('mouseover', async function(e){
   salesDropdown.style.cssText =  `
   animation: sales-dropdown 1s cubic-bezier(0.895, 0.03, 0.685, 0.2) forwards;
   transition: 10s linear;display:flex; position:fixed;`;

   closeDisplay();
   kidsDropdown.style.cssText =  `display:none;`;
   kids.style.cssText = `text-decoration:none;`;
});

window.addEventListener('click', async function(e) {
  closeDisplay()
  kidsDropdown.style.cssText =  `display:none;`;
  kids.style.cssText = `text-decoration:none;`;
  salesDropdown.style.cssText =  `display:none;`;
  sales.style.cssText = `text-decoration:none;`;
});

window.addEventListener('dblclick', async function(e) {
  salesUpperTop.style.cssText =  `display:none;`;
});

let changeText = async () => {
   const text = [
      'MID-SEASON SALE: UP TO 50% OFF',
      'FREE STANDARD SHIPPING & RETURNS',
      'UP TO 65% OFF WITH CODE: EXTRASALE'
   ]


   index = index < text.length -1 ? ++index : 0;
   salesOffData.textContent = `${text[index]}`;

   const width = window.innerWidth
   if(width >= 955){
      salesOffData.insertAdjacentHTML('beforeend', "<span class='down-A'></span>");
   }
}

setInterval(changeText, 8000);

window.addEventListener('resize',function(e){
   const width = this.innerWidth
   if(width >= 955){
      mobileOpenSideMenu.style.cssText = `display:none;`;
      this.document.body.style.overflow = 'auto';
   }

});


function menuHover(){
   const change = true;
   const width = window.innerWidth
   Array.from(mobileBarIcon).filter((currentElement) => {

      switch (change){
         case currentElement.classList.contains('icon-right') :
            currentElement.style.cssText = `border-color: white;transition: all .20s linear; transform:rotatey(190deg)rotate(50deg);`;
            break;
         case currentElement.classList.contains('icon-middle') :
            currentElement.style.cssText = `border-color: red;transition: all .20s linear; transform:rotatey(190deg)rotate(-179deg);`;
            if(width >= 480){
               currentElement.style.cssText = `animation: icon-middle 3s linear infinite;`;
            }
            break;
         case currentElement.classList.contains('icon-left') :
            currentElement.style.cssText = `border-color: white;transition: all .20s linear; transform:rotatey(190deg)rotate(-50deg);`;
            break;

      }

   })

};

function menuClose(){
   Array.from(mobileBarIcon).forEach(list => {
      list.style.cssText = `border-color: white;transition: all .20s linear;`;
   });
};


mobileMunuWrapper.addEventListener('click', function(e){
   const width = window.innerWidth;
   if(width <= 470){
      mobileOpenSideMenu.style.cssText = `
      animation: open-menu 1s ease forwards;transition: animation .7s linear;display:flex; overflow-y:scroll;`;
      header.style.display = 'none'
      body.style.cssText = 'overflow-y:scroll; overflow-x:hidden;background:#181818;';
      mainWrapper.style.display = 'none'
      section.style.display = 'none'
      article.style.display = 'none'
      footer.style.display = 'none'
   }else{
      mobileOpenSideMenu.style.cssText = `
      animation: open-menu 1s ease forwards;transition: animation .7s linear;display:grid;overflow-y:scroll;overflow-x:hidden;`;
      body.style.cssText = 'overflow-y:scroll; overflow-x:hidden;background:#181818';
      mainWrapper.style.display = 'none';
      section.style.display = 'none';
      article.style.display = 'none';
      footer.style.display = 'none';
      header.style.display = 'none'
   }
})
mobileCloseSideMenu.addEventListener('click', function(e){
   mobileOpenSideMenu.style.cssText = `
   animation: close-menu 4s ease forwards;transition: animation .20s linear;display:none;`
   body.style.cssText = 'background:black;overflow:auto;';
   mainWrapper.style.display = 'grid';
   section.style.display = '';
   article.style.display = '';
   footer.style.display = '';
   header.style.display = '';
})

mobileMunuWrapper.addEventListener('mouseover', function(e){
   menuHover()
})
mobileMunuWrapper.addEventListener('mouseleave', function(e){
   menuClose()
})

userIcon.addEventListener('click', (e) => {
   userLoginForm.style.cssText = `
   animation: user-login 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) forwards;transition: animation .20s linear;display:flex;
   `;
   userAlertMsg.style.display = 'none'
});

userLoginForm.addEventListener('click', (e) => {
   console.log(e)
})
cancelLoginForm.addEventListener('click', (e) => {
   userLoginForm.style.cssText = `display:none;
   `
})

var options = {
   animate: true,
   patternWidth: 100,
   patternHeight: 100,
   grainOpacity: 0.13,
   grainDensity: 1,
   grainWidth: 1,
   grainHeight: 1
 };

 grained("#grain1", options);
 grained("#grain2", options);
 grained("#grain3", options);
 grained("#grain4", options);
 grained("#grain5", options);
 grained("#grain6", options);
 grained("#grain7", options);
 grained("#grain8", options);

const grainCancel = async () => {
   const width = window.innerWidth

   if(width >= 460){
      grained("#grain9", options);
   }
   if(width <= 460){
      quotes.textContent = `It is totally impossible to be well-dressed in cheap shoes. Buy adidas.`;
   }
}

grainCancel()