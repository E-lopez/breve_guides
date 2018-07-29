## Table of Contents

////////////////////////////*TO DO*/////////////////////////

* [Layout Modifications](#layout-modifications)
    *[Cores Component](#cores-component)

* [Functionality Modifications](#functionality-modifications)


## Layout Modifications

Previous layout changed comunication codes from main buttons to feedback buttons, which appear just as
information chunks.

Changed the latter to make them evident buttons. 


### Cores Component

Added title "Agéndate" and explanation note above and below the `individual` and `double` buttons.


### Feedback Component

Changed buttons style to make them evident to be interactive. Changed each one lay-out from `column` to `row`, and replace icons te reduce color saturation.

Added `color` property in `data` obeject `feedbackChunks` to give a different one to each button:

Strengths "#4682B4"
Oportunities "#537A9A"
Resources "#4D6171"


### Router Component

#### Schedule Component

Change previous skills for topics instead. Replaced colored icons for outlines.


### Place Component

Made `View` map containing responsive to screen `Dimensions` to get the Screen Height/1.5
This should work in greater resolution screens.


### Instructions Component

Some instructions Items where no fully visible. Adjusted height property to fix it.


### Router Component

Change label 'Skill' into 'Tema'.




## Functionality Modifications

Previous version showed two relevant bugs: due session still apperead on MainHeader component as if pending session. Also, user could schedule a new session even if they had not scored previous guide.

### Main Header

### Data Manager CalculateDistance

Using Haversine formula. Error calculating Arc:

Before  
var Arc = pow(sin(deltaOne/2), 2) + cos(thetaUsr) * cos(thetaGd) * sin(deltaTwo/2)

Correction
  var Arc = pow(sin(deltaOne/2), 2) + cos(thetaUsr)  *cos(thetaGd) * pow(sin(deltaTwo/2), 2)





