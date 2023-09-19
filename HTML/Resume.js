var anchorTagNames = document.querySelectorAll('.nav-menu a');
console.log(anchorTagNames);

var Interval;

for(var i=0; i<anchorTagNames.length; i++){
    anchorTagNames[i].addEventListener('click',function(event){
        event.preventDefault();
        var eventName = this.textContent.trim().toLowerCase();
        var eventTarget = document.getElementById(eventName);
        console.log(eventTarget)
         Interval = setInterval(scrollDown, 20, eventTarget);
        // console.log(eventTarget);
    });
}

function scrollDown(eventTarget){
    var targetCoordinates = eventTarget.getBoundingClientRect()
    if(targetCoordinates.top <= 0){
        clearInterval(Interval);
        return;
    }
    window.scrollBy(0,50);
}

var skillbars = document.querySelectorAll('.skill-progress > div');
var skillContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var anmationDone = false;

function intialBar(){
    for(let bar of skillbars){
        bar.style.width = 0 + '%';
    }
}

// intialBar();

function fillbars(){
    for(let bar of skillbars){
        let targetbar = bar.getAttribute('data-bar-width');
        let currentwidth = 0;
        let interval = setInterval(function(){
            if(currentwidth > targetbar){
                clearInterval(interval);
                return;
            }
            currentwidth++;
            bar.style.width = currentwidth + '%';
        }, 2)
    }
}

function checkScroll(){
    var coordinates = skillContainer.getBoundingClientRect();
    if(!anmationDone && coordinates.top <= window.innerHeight){
         anmationDone = true;
        console.log('Skill scection visible');
        fillbars();
    }
}

function Student(id, name, club){
    this.id = id ;
    this.name = name ;
    this.club = club ;
    this.printDetails = function(){
        console.log(this.id, this.name, this.club);
    }
}

Student.prototype.printDetails = function(){
    console.log(this.id, this.name, this.club);
}

Student.delete(printDetails);

