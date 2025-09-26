# flex terminology

# flex:- it is 1D layout model

# flex-container:- flex container is used as a container 

# flex-item:- the element inside the container is called flex items 

# flex items are just the children of flex container

# Main Axis:- the main axis is used as a primary axis for the flex-container to align the fex-items it is set using the flex-direction property

# Cross Axis:- it is always perpendicular to the main axis 

when we use flex the nature of the container like block change its nature to flex and block nature is lost so it is adjusted to the right of the container

flex container property

display: flex;
flex-direction:_____;
    it set the main axis
    i)row
    ii)row -reverse
    iii)column
    iv)column-reverse

flex-wrap:_____;
    i)nowrap
    ii)wrap
    iii)wrap reverse

flex-flow:______  _____;
          flex-direction    flex-wrap
    it is the shorthand property of flex-direction and flex-wrap

gap:_____  _____;
    row gap  column gap
    if row and column gap are same
    gap:____;

justify-content:_____; move the children only on main axis 
    it align the flex-items on main axis
    i)flex-start by default
    ii)flex-end 
    iii)center
    iv)space-between
    v)space-around
    vi)space-evenly

align-items:_______; move the children on cross axis or vertically
    i)flex-start
    ii)flex-end
    iii)center

align-content:_____;
    i)stretch
    ii)flex-start
    iii)flex-end
    iv)center 
    v)space-between
    vi)space-around
    vii)space evenly