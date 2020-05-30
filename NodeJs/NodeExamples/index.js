var rect = require('./rectangle')

function solveRect(l,b)
{
    console.log("Solving for rectange = "+ l + b);
    if (l <=0 || b <= 0)
    {
        console.log("Rectangle Dimension should be greate than Zero")
    }
    else 
        console.log("The area of the rectangle is  " + rect.area(l,b) )
        console.log("The perimete of the rectangle is " + rect.perimeter(l,b))
}

solveRect(2,4);
solveRect(0,5);
solveRect(-3,5);
