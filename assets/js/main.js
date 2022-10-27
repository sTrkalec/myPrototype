// Animations
AOS.init({
  anchorPlacement: "top-left",
  duration: 1000,
});

let isDark = false

// Add your javascript here
function cliclou() {
  isDark == false ? isDark = true : isDark = false
  
  if(isDark == true){
    const root = document.querySelector(":root"); //grabbing the root element
    root.style.setProperty("--workExperience-background-color", 'rgba(150, 87, 229, 0.52)');
    root.style.setProperty("--workExperience-color", 'rgb(240, 240, 240)');
    root.style.setProperty("--icons-background", 'rgb(204, 204, 204)');
    root.style.setProperty("--subtitulo", 'rgb(161, 161, 161)');
    root.style.setProperty("--body-themer", 'rgb(18, 18, 20)');
    root.style.setProperty("--body-themer-container", 'rgb(32, 32, 36)');
    root.style.setProperty("--pseudo-backgroundcolor", '#f100ff');
    root.style.setProperty("--cover-bg", '#8257e585');
    root.style.setProperty("--body-color", 'rgb(218, 218, 218)');

  }
  else{
    const root = document.querySelector(":root"); //grabbing the root element
    root.style.setProperty("--workExperience-background-color", '#FFFFFF');
    root.style.setProperty("--workExperience-color", '#434a54');
    root.style.setProperty("--icons-background", '#656d78');
    root.style.setProperty("--subtitulo", '#656d78');
    root.style.setProperty("--body-themer", '#f5f7fa');
    root.style.setProperty("--body-themer-container", '#f5f7fa');
    root.style.setProperty("--pseudo-backgroundcolor", '#4a89dc');
    root.style.setProperty("--cover-bg", '#4a89dc');
    root.style.setProperty("--body-color", '#434a54');
  }
}
