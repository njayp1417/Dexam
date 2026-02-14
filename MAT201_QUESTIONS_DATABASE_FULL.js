const MAT201_QUESTIONS = [
    {
        id: 1,
        question: "If xy - yx³/3 = 6 is the equation of a curve, find the slope at point (1,2)",
        options: ['A. -2/11', '2/11', '6', '2', '11'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 1"
    },
    {
        id: 2,
        question: "If xy - yx³/3 = 6 is the equation of a curve, find the equation of the tangent at point (1, 2)",
        options: ['A. 2x +11y -24 =0', '2x -11y +24 =0', '11y -24 =0', '2x -24 =0', '2x +1'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 2"
    },
    {
        id: 3,
        question: "If x³ + y³ = 3ax², obtain the derivative dy/dx",
        options: ['A. (2ax - x²)/y²', '2ax + x²/y²', '2ax - x²/y²', '2ax + x²/y²', '2ax - x²'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 3"
    },
    {
        id: 4,
        question: "if ye^xy = sinx find d²y/dx² at (0,0)",
        options: ['2', 'B. 0', '1', 'cosx', 'sinx'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 4"
    },
    {
        id: 5,
        question: "if z³ + xy - yz² = 6. Obtain the value of ∂y/∂x at (0,1,2)",
        options: ['1', 'B. 1/4', '-1/11', '6', '2'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 5"
    },
    {
        id: 6,
        question: "if z³ + xy - yz² = 6. Obtain the value of ∂²y/∂x² at (0,1,2)",
        options: ['1/4', 'B. -1/11', '6', '1', '2'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 6"
    },
    {
        id: 7,
        question: "State the degree of homogeneous function ((x² + y²)²)³",
        options: ['0', '1', 'C. 3', '2', '2/3'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 7"
    },
    {
        id: 8,
        question: "Obtain the degree of the homogeneous function x^(1/3) y^(-4/3) tan⁻¹(y/x)",
        options: ['0', '1', 'C. -1', '2', '2/3'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 8"
    },
    {
        id: 9,
        question: "In the Taylor's expansion of f(x,y) = x² + xy + y² in powers of (x-1) and (y-1), state the value of fx",
        options: ['1', 'x + 2y', 'C. 2x + y', '0', '2'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 9"
    },
    {
        id: 10,
        question: "In the Taylor's expansion of f(x,y) = x² + xy + y² in powers of (x-1) and (y-1), state the value of fy",
        options: ['1', '-1', '2x + y', 'D. x + 2y', '2'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 10"
    },
    {
        id: 11,
        question: "In the Taylor's expansion of f(x,y) = x² + xy + y² in powers of (x-1) and (y-1), state the value of fxy",
        options: ['x + 2y', '-1', '2x + y', 'D. 1', '2'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 11"
    },
    {
        id: 12,
        question: "In the Taylor's expansion of f(x,y) = x² + xy + y² in powers of (x-1) and (y-1), state the value of fxx",
        options: ['x + 2y', '-1', '2x + y', 'D. 2', '0'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 12"
    },
    {
        id: 13,
        question: "In the Taylor's expansion of f(x,y) = x² + xy + y² in powers of (x-1) and (y-1), state the value of fyy",
        options: ['x + 2y', '-1', '2x + y', 'D. 2', '0'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 13"
    },
    {
        id: 14,
        question: "In the Taylor's expansion of f(x,y) = x² + xy + y² in powers of (x-1) and (y-1), state the value of fxxx",
        options: ['x + 2y', '-1', '2x + y', '2', 'E. 0'],
        correct: 4,
        topic: "Mathematics",
        explanation: "Solution for question 14"
    },
    {
        id: 15,
        question: "In the Taylor's expansion of f(x,y) = x² + xy + y² in powers of (x-1) and (y-1), state the value of fxxy",
        options: ['x + 2y', '-1', '2x + y', '2', 'E. 0'],
        correct: 4,
        topic: "Mathematics",
        explanation: "Solution for question 15"
    },
    {
        id: 16,
        question: "In the Taylor's expansion of f(x,y) = x² + xy + y² in powers of (x-1) and (y-1), state the value of fyyx",
        options: ['x + 2y', '-1', '2x + y', '2', 'E. 0'],
        correct: 4,
        topic: "Mathematics",
        explanation: "Solution for question 16"
    },
    {
        id: 17,
        question: "In the Taylor's expansion of f(x,y) = x² + xy + y² in powers of (x-1) and (y-1), state the value of fyyy",
        options: ['A. 0', '-1', '2x + y', '2', '0'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 17"
    },
    {
        id: 18,
        question: "State the coefficient of fyy in the Maclaurin expansion of f(x,y) = e^(x+y)",
        options: ['A. 1/2', '0', '2', '1', 'x+y'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 18"
    },
    {
        id: 19,
        question: "State the coefficient of fxy in the Maclaurin expansion of f(x,y) = e^(x+y)",
        options: ['1/2', '0', '2', 'D. 1', 'x+y'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 19"
    },
    {
        id: 20,
        question: "State the stationary values for the function f(x,y) = x³ + 3xy² - 15x² - 15y² + 72x",
        options: ['A. (6, 0), (4, 0), (5, 1), (5, -1)', '(-6, 0), (4, 0), (5, 1), (5, -1)', '(6, 0), (4, 0), (5, 1), (-5, 1)', '(6, 0), (4, 0), (1, 5), (5, -1)', '(6, 0), (-4, 0), (5, 1), (5, -1)'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 20"
    },
    {
        id: 21,
        question: "Which of the stationary values of the function f(x,y) = x³ + 3xy² - 15x² - 15y² + 72x gives the maximum?",
        options: ['A. (4, 0)', '(6, 0)', '(5, 1)', '(5, -1)', '(0, 0)'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 21"
    },
    {
        id: 22,
        question: "Which of the stationary values of the function f(x,y) = x³ + 3xy² - 15x² - 15y² + 72x gives the minimum?",
        options: ['(4, 0)', 'B. (6, 0)', '(5, 1)', '(5, -1)', '(0, 0)'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 22"
    },
    {
        id: 23,
        question: "Which of the stationary values of the function f(x,y) = x³ + 3xy² - 15x² - 15y² + 72x gives the saddle?",
        options: ['(6, 0), (4, 0)', '(-6, 0), (4, 0)', 'C. (5, 1), (5, -1)', '(-6, 0), (4, 0)', '(6, 0), (-4, 0)'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 23"
    },
    {
        id: 24,
        question: "Obtain the value of the function f(x,y) = x³ + 3xy² - 15x² - 15y² + 72x at the maximum point.",
        options: ['6', '-36', '108', 'D. 112', 'None of the above'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 24"
    },
    {
        id: 25,
        question: "Obtain the value of the function f(x,y) = x³ + 3xy² - 15x² - 15y² + 72x at the minimum point.",
        options: ['6', '-36', 'C. 108', '112', 'None of the above'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 25"
    },
    {
        id: 26,
        question: "Evaluate ∫₀^(π/2) sin⁷x dx",
        options: ['6/7', '4/5', '2/3', '3/8', 'E. 16/35'],
        correct: 4,
        topic: "Mathematics",
        explanation: "Solution for question 26"
    },
    {
        id: 27,
        question: "Determine the area enclosed by the curve a²x² = y³(2a - y)",
        options: ['A. πa²', 'x³', 'y³', 'πa³', 'πy³(2a - y)'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 27"
    },
    {
        id: 28,
        question: "Determine the volume of solid generated by revolving the plane area bounded by y² = 4x and x = 4 about the line x = 4.",
        options: ['A. 1024π/15', '1024/15', '1024', '15', 'π'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 28"
    },
    {
        id: 29,
        question: "What is the volume generated by revolving the area enclosed by the loop of the curve y⁴ = x(4 - x) about the x axis.",
        options: ['A. 2π²', 'π²', '-π²', '4π²', '-2π²'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 29"
    },
    {
        id: 30,
        question: "find the area of the surface generated by revolving the curve with parametric equations x(t) = 3t(t - 2), y(t) = 8t^(3/2)",
        options: ['A. 39π', '-39π', '8π', '3π', '39/2π'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 30"
    },
    {
        id: 31,
        question: "Evaluate ∫∫_D (x² + y²) dxdy, where D is bounded by y = x, y = 4x²",
        options: ['384/35', '768/35', '-384/35', 'D. 768/35', 'None of the above'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 31"
    },
    {
        id: 32,
        question: "Solve ∫[3/(2x-5) + 2/(x-8)] dx",
        options: ['A. (3/2)ln(2x-5) + 2ln(x-8) + C', '(3/2)ln(2x+5) + 2ln(x-8) + C', 'ln(2x-5) + ln(x-8) + C', '(3/2)ln(2x-5) + 2ln(x+8) + C', '(3/2)ln(2x-5) + C'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 32"
    },
    {
        id: 33,
        question: "Express in Partial Fraction (5x-21)/(x-3)²",
        options: ['(5x-21)/(x-3)', 'B. 5/(x-3) - 6/(x-3)²', '-6/(x-3)²', '5/(x-3)', '0'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 33"
    },
    {
        id: 34,
        question: "Which of the following is continuous at the specified point:",
        options: ['f(x) = sinx/x, at x = 0', 'f(x) = (x²-1)/(x-1), at x = 1', 'f(x) = 1/x, at x = 0', 'f(x) = (x²-9)/(x-3), at x = 3', 'E. f(x) = 3x/(x+5), at x = 0'],
        correct: 4,
        topic: "Mathematics",
        explanation: "Solution for question 34"
    },
    {
        id: 35,
        question: "Let f:I→R where I→R. Let g:I→R be real valued functions which are differentiable at p∈I and let λ∈R. then which of the following statement is likely not to be true",
        options: ['f + g is a differentiable at x = p', 'λf is a differentiable at x = p', 'fg is a differentiable at x = p', 'D. f/g is a differentiable at x = p provided g(p) ≠ 0', 'f, g is a continuous at x = p'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 35"
    },
    {
        id: 36,
        question: "Evaluate I = ∫_C (x² - y) dx, if C is the line segment of the straight line y = x, 0 ≤ x ≤ 1",
        options: ['A. 1/6', '1', '0', 'x = y', '2/3'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 36"
    },
    {
        id: 37,
        question: "Evaluate the double integral I = ∫∫_R (x² + y) dxdy where R is the region bounded by line y = x²",
        options: ['A. 1/6', '1/3', '2/3', '0', '-1'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 37"
    },
    {
        id: 38,
        question: "if a = e, the nth derivative of y = a^(mx) is",
        options: ['ma^(mx) log_e a', 'm²a^(mx) (log_e a)²', 'C. m^n e^(mx)', 'ma^(mx)', 'a^(mx) (log_e a)²'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 38"
    },
    {
        id: 39,
        question: "Obtain the derivative of y = e^(ax) cos(bx + c)",
        options: ['A. e^(ax)[a cos(bx+c) - b sin(bx+c)]', 'e^(ax) cos(bx+c)', 'a cos(bx+c)', '-b sin(bx+c)', '-a cos(bx+c)'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 39"
    },
    {
        id: 40,
        question: "Obtain the derivative of x³ ln x",
        options: ['3x² ln x', 'B. 3x² ln x + x²', 'x² ln x', '3 ln x', '3x² ln x - x²'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 40"
    },
    {
        id: 41,
        question: "obtain d²y/dx² if x³ + y³ = 3axy",
        options: ['2a³xy/(y - ax²)³', 'B. -2a³xy/(y - ax²)³', '(y - ax²)³', '-2a³x/(y - ax²)³', '-2xy/(y - ax²)³'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 41"
    },
    {
        id: 42,
        question: "If y = tan⁻¹(2x/(1-x²)) obtain dy/dx",
        options: ['A. 2/(1 + x²)', '2/(x + x²)', '-2/(1 + x²)', '2/(1 - x²)', 'x/(1 + x²)'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 42"
    },
    {
        id: 43,
        question: "Given that y = (1/x)^x, find d²y/dx²",
        options: ['x', '-x', 'C. 0', '-1', '1'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 43"
    },
    {
        id: 44,
        question: "Obtain the first derivative of y = x sin x",
        options: ['x sin x', 'sin x', 'x sin x - cos x', 'D. x cos x + sin x', 'cos x'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 44"
    },
    {
        id: 45,
        question: "If y = ax⁵ + bx⁴ + cx³ + dx² + ex + f, then d⁶y/dx⁶ is",
        options: ['a', 'b', 'e', '3', 'E. 0'],
        correct: 4,
        topic: "Mathematics",
        explanation: "Solution for question 45"
    },
    {
        id: 46,
        question: "Given that y = x² sin x, obtain dy/dx",
        options: ['x² cos x', 'cos x', 'sin x', 'D. x² cos x + 2x sin x', 'x² cos x - 2x sin x'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 46"
    },
    {
        id: 47,
        question: "Obtain the derivative of y = x^(n-1) ln x at x = 1/2",
        options: ['x^(n-1) ln x', 'x^(n-1) ln 2x', 'C. (n-1)x^(n-2) ln x + x^(n-2)', '(n-1)x^(n-2) ln x + (n-1)x^(n-2)', '(n-1)x^(n-1) ln x + (n-1)x^(n-2)'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 47"
    },
    {
        id: 48,
        question: "Given that f(x) = x² in (1, 5). Obtain the value of c which satisfies the mean value theorem",
        options: ['2', 'B. 3', '-1', '1', '0'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 48"
    },
    {
        id: 49,
        question: "Given that f(x) = x(x-1)(x-2) in (0, 1/2). Obtain the value of c which satisfies the mean value theorem",
        options: ['A. 0.236', '0.5', '0.1', '1', '-1'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 49"
    },
    {
        id: 50,
        question: "If f(x) = ln x within the interval (e², e³). Obtain the value of c which satisfies the mean value theorem.",
        options: ['A. (e-1)e²', '(e-1)', '(e-2)', '2(e-1)', 'e²'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 50"
    },
    {
        id: 51,
        question: "Which of the following is true for the mean value theorem, given a function f(x) = 1 - 3x in the interval (1, 4)",
        options: ['The value is not in the interval', 'B. It satisfies any value in the interval', 'It is not well posed', 'None of the above', 'All of the above'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 51"
    },
    {
        id: 52,
        question: "If f(x) = cos x in (0, π/2), Obtain the value of c which satisfies the mean value theorem.",
        options: ['cos x', 'sin⁻¹(1/π)', 'C. sin⁻¹(2/π)', 'cos⁻¹(2/π)', 'sin⁻¹(-1/π)'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 52"
    },
    {
        id: 53,
        question: "Obtain the Maclaurin series for f(x) = e^x",
        options: ['1 + x - x²/2! + x³/3! - x⁴/4! + ...', 'x + x²/2! + x³/3! + x⁴/4! + ...', 'x - x²/2! + x³/3! - x⁴/4! + ...', 'D. 1 + x + x²/2! + x³/3! + x⁴/4! + ...', '1 + x + x²/2! + x⁴/4! + ...'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 53"
    },
    {
        id: 54,
        question: "Obtain the Maclaurin series for f(x) = sin x",
        options: ['1 + x + x²/2! + x³/3! + x⁴/4! + ...', '1 + x + x²/2! + x⁴/4! + ...', 'x - x²/2! + x³/3! - x⁴/4! + x⁵/5! - x⁷/7! + ...', 'x + x²/2! + x³/3! + x⁴/4! + x⁵/5! + x⁷/7! + ...', 'E. x - x³/3! + x⁵/5! - x⁷/7! + ...'],
        correct: 4,
        topic: "Mathematics",
        explanation: "Solution for question 54"
    },
    {
        id: 55,
        question: "Obtain the Taylor's series expansion for the function f(x) = sinh x at x = 0",
        options: ['A. x + x³/3! + x⁵/5! + x⁷/7! + ...', '1 + x + x²/2! + x³/3! + x⁴/4! + x⁵/5! + x⁷/7! + ...', '1 + x + x³/3! + x⁵/5! + x⁷/7! + ...', '1 - x + x²/2! - x³/3! + x⁴/4! - x⁵/5! + x⁷/7! - ...', 'None of the above'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 55"
    },
    {
        id: 56,
        question: "Obtain the Taylor's series expansion for the function f(x) = cosh x at x = 0",
        options: ['A. 1 + x²/2! + x⁴/4! + x⁶/6! + ...', '1 + x + x²/2! + x³/3! + x⁴/4! + x⁵/5! + x⁷/7! + ...', '1 + x + x³/3! + x⁵/5! + x⁷/7! + ...', '1 - x + x²/2! - x³/3! + x⁴/4! - x⁵/5! + x⁷/7! - ...'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 56"
    },
    {
        id: 57,
        question: "Evaluate lim(x→1) (1 + ln x - x)/(1 - 2x + x²)",
        options: ['1', 'B. -1/2', '1/2', '-1', '0'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 57"
    },
    {
        id: 58,
        question: "Evaluate lim(x→0) (e^(ax) - e^(-ax))/ln(1 + bx)",
        options: ['a', 'x', 'C. 2a/b', 'a/b', '1/b'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 58"
    },
    {
        id: 59,
        question: "Obtain the value of lim(x→1) (x² - 1)/(x² + 1)",
        options: ['-1', 'B. 1', '1/2', '0', '∞'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 59"
    },
    {
        id: 60,
        question: "Obtain the value of lim(x→∞) x^n/e^x",
        options: ['-1', '1', '1/2', 'D. 0', '∞'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 60"
    },
    {
        id: 61,
        question: "Evaluate lim(x→1) [x/(x-1) - 1/ln x]",
        options: ['-1', '1', 'C. 1/2', '0', '∞'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 61"
    },
    {
        id: 62,
        question: "Find the value of lim(x→∞) (e^x + x)^(1/x)",
        options: ['-1', '1', '1/2', 'D. e', '∞'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 62"
    },
    {
        id: 63,
        question: "Find the value of lim(x→π/2) (tan x)^(tan 2x)",
        options: ['-1', 'B. 1', '1/2', 'e', '∞'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 63"
    },
    {
        id: 64,
        question: "Find the value of lim((x,y)→(0,0)) (x² + y²)/(y² - x²)",
        options: ['-1', '1', 'C. Does not exist', 'e', '0'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 64"
    },
    {
        id: 65,
        question: "Obtain ∂w/∂x if w = e^x cos y",
        options: ['cos y', 'e^x sin y', 'C. e^x cos y', '-e^x cos y', 'e^x cosec y'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 65"
    },
    {
        id: 66,
        question: "Obtain ∂w/∂y if w = e^x cos y",
        options: ['cos y', 'B. -e^x sin y', 'e^x cos y', '-e^x cos y', 'e^x cosec y'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 66"
    },
    {
        id: 67,
        question: "If w = tan⁻¹(y/x), find ∂w/∂x",
        options: ['A. -y/(x² + y²)', '(x² + y²)/(-y)', '-y/(x² + y²)/(-y)', '-x/(x² + y²)', '-y/(x² - y²)'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 67"
    },
    {
        id: 68,
        question: "If w = tan⁻¹(y/x), find ∂w/∂y",
        options: ['-y/(x² + y²)', '(x² + y²)/(-y)', '-y/(x² + y²)/(-y)', 'D. x/(x² + y²)', '-y/(x² - y²)'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 68"
    },
    {
        id: 69,
        question: "If f(x,y,z,w) = x²e^(2y+3z) cos 4w, obtain ∂f/∂w",
        options: ['A. -4x²e^(2y+3z) sin 4w', '4x²e^(2y+3z) sin 4w', 'x²e^(2y+3) cos 4w', '-x²e^(2y+3) cos 4w', 'x²e^(2y+3z) sin 4w'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 69"
    },
    {
        id: 70,
        question: "If f(x,y,z,w) = x²e^(2y+3z) cos 4w, obtain ∂f/∂z",
        options: ['-4x²e^(2y+3z) sin 4w', '4x²e^(2y+3z) sin 4w', 'C. 3x²e^(2y+3z) cos 4w', '-x²e^(2y+3) cos 4w', 'x²e^(2y+3z) sin 4w'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 70"
    },
    {
        id: 71,
        question: "find ∂³U/∂x∂y∂z if U = e^(x² + y² + z²)",
        options: ['A. 8xyz U', 'xyz U', '8xyz', '8xz U', 'x² + y² + z²'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 71"
    },
    {
        id: 72,
        question: "If U = ln(x³ + y³ - x²y - y²x), then obtain the value of Uxx + 2Uxy + Uyy",
        options: ['A. -4/(x + y)²', '4/(x + y)²', '-4/(x - y)²', '4/(x - y)²', '(x - y)²/y'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 72"
    },
    {
        id: 73,
        question: "If f(x,y,z) = z sin⁻¹(y/x) find ∂f/∂x",
        options: ['A. -yz/√(x⁴ - x²y²)', 'yz/√(x⁴ - x²y²)', 'yz/√(x⁴ + x²y²)', '-yz/√(x⁴ - x²y²)', '-yz/√(x⁴ + x²y²)'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 73"
    },
    {
        id: 74,
        question: "if f(u,v,w) = (u² - v²)/(v² + w²), find ∂f/∂v",
        options: ['2v(v² + w²)/(v² + w²)²', 'B. -2v(v² + w²)/(v² + w²)²', '-2v(v² + w²)/(v² - w²)²', '-2v(v² - w²)/(v² + w²)²', '2v(v² - w²)/(v² + w²)²'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 74"
    },
    {
        id: 75,
        question: "if f(u,v,w) = (u² - v²)/(v² + w²), find ∂f/∂w",
        options: ['A. -2w(u² - v²)/(v² + w²)²', '-2v(v² + w²)/(v² + w²)²', '-2v(v² + w²)/(v² - w²)²', '-2v(v² - w²)/(v² + w²)²', '2v(v² - w²)/(v² + w²)²'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 75"
    },
    {
        id: 76,
        question: "if z = x² + 2y², x = r cos θ, y = r sin θ, Obtain the value of (∂z/∂x)_y",
        options: ['A. 2x', '2y', '2z', 'x', 'y'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 76"
    },
    {
        id: 77,
        question: "if z = x² + 2y², x = r cos θ, y = r sin θ, Obtain the value of (∂z/∂x)_θ",
        options: ['2x(1 - 2tan²θ)', 'x(1 + 2tan²θ)', 'C. 2x(1 + 2tan²θ)', '2x(1 + tan²θ)', '2x(2tan²θ)'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 77"
    },
    {
        id: 78,
        question: "If u = x² + y² + z², x = e^(2t), y = e^(2t) cos 3t, z = e^(2t) sin 3t, find du/dt",
        options: ['8', '2e^(2t)', 'C. 8e^(2t)', '6e^(2t)', '4e^(2t)'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 78"
    },
    {
        id: 79,
        question: "Find the total differential coefficient of x²y with respect to x where x,y are connected by x² + xy + y² = 1",
        options: ['2xy + x²(2x + y)/(x + 2y)', '2xy - x²(2x - y)/(x + 2y)', 'C. 2xy - x²(2x + y)/(x + 2y)', '2xy - x²(2x - y)/(x - 2y)', '2xy + x²(2x - y)/(x + 2y)'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 79"
    },
    {
        id: 80,
        question: "The altitude of a right circular cone is 15cm and is increasing at 0.2cm/sec. The radius of the base is 10cm and is decreasing at 0.3cm/sec. how fast is the volume changing?",
        options: ['A. -70π/3 cm³/s', '70π/3 cm³/s', '-70π/3 cm²', '70π/3 cm²', '-70π cm²/s'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 80"
    },
    {
        id: 81,
        question: "The altitude of a right circular cone is 15cm and is increasing at 0.2cm/sec. The radius of the base is 10cm and is decreasing at 0.3cm/sec. At what rate is the volume decreasing?",
        options: ['A. -70π/3 cm³/s', '70π/3 cm³/s', '-70π/3 cm²', '70π/3 cm²', '-70π cm²/s'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 81"
    },
    {
        id: 82,
        question: "If U = tan⁻¹(y/x) and at x = e^t - e^(-t), y = e^t + e^(-t) find dy/dx",
        options: ['-2/(e^(2t) - e^(-2t))', '-2/(e^(2t) - e^(-2t))', '2/(e^(2t) - e^(-2t))', '2/(e^(2t) + e^(-2t))', 'E. -2/(e^(2t) + e^(-2t))'],
        correct: 4,
        topic: "Mathematics",
        explanation: "Solution for question 82"
    },
    {
        id: 83,
        question: "In other that the function U = 2xy - 3x²y remains constant. what should be the rate of change of y given that x increases at the rate of 2cm/s at the instant when x = 3cm and y = 1cm",
        options: ['A. -32/21 cm/s', '32/21 cm/s', '-32/2 cm/s', '-32 cm/s', '32 cm/s'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 83"
    },
    {
        id: 84,
        question: "Find the rate at which the area of a rectangle is increasing at a given instant when the sides of the rectangle are 4ft and 3ft and increasing at the rate of 1.5ft/sec and 0.5ft/sec respectively.",
        options: ['4 sqft/sec', '3 sqft/sec', '12 sqft/sec', 'D. 6.5 sqft/sec', '0.75 sqft/sec'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 84"
    },
    {
        id: 85,
        question: "if u = x² - y², x = 2r - 3s + 4, y = -r + 8s - 5, obtain du/dr",
        options: ['2r - 3s + 4', '-r + 8s - 5', 'C. 2(2x + y)', '(2x + y)', '(2x - y)'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 85"
    },
    {
        id: 86,
        question: "if u = x² - y², x = 2r - 3s + 4, y = -r + 8s - 5, obtain du/ds",
        options: ['2r - 3s + 4', '-r + 8s - 5', 'C. -6x - 16y', '(2x + y)', '(2x - y)'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 86"
    },
    {
        id: 87,
        question: "If x⁵ + y⁵ = a³x² Obtain d²y/dx²",
        options: ['A. 6a³x²/(a³ + x³)y⁹', '6a³x²/(a³ - x³)y⁹', '6a³/(a³ + x³)y⁹', '6a³x²/(a³ + x³)y³', 'a³x²/(a³ + x³)y⁹'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 87"
    },
    {
        id: 88,
        question: "Compute ∂z/∂x at (1,-1, 2) if x² + y² = z² + a²",
        options: ['0', '1', 'C. -1/2', '-1', '2'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 88"
    },
    {
        id: 89,
        question: "Compute ∂z/∂y at (1,-1, 2) if x² + y² = z² + a²",
        options: ['0', 'B. 1', '-1/2', '-1', '2'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 89"
    },
    {
        id: 90,
        question: "If y = 2x³ - 2x + 4x, find d³y/dx³",
        options: ['24x', '0', 'C. 24', 'x', '-24'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 90"
    },
    {
        id: 91,
        question: "Obtain the Stationary point for the function y = 2x³ + 3x² - 12x + 4",
        options: ['A. (1, 3), (-2, 24)', '(3, 1), (-24, 2)', '(-1, -3), (-2, 24)', '(1, 3), (-2, -24)', '(-1, 3), (-2, 24)'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 91"
    },
    {
        id: 92,
        question: "Which of the Stationary points for the function y = 2x³ + 3x² - 12x + 4 gives the maximum",
        options: ['(-1, 3)', '(3, 1)', 'C. (-2, 24)', '(1, 3)', '(-24, 2)'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 92"
    },
    {
        id: 93,
        question: "Which of the Stationary points for the function y = 2x³ + 3x² - 12x + 4 gives the minimum",
        options: ['(-1, 3)', '(3, 1)', '(-2, 24)', 'D. (1, 3)', '(-24, 2)'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 93"
    },
    {
        id: 94,
        question: "If x² + xy + y⁴ = 7 find dy/dx",
        options: ['A. -(2x + y)/(x + 4y³)', '(2x + y)/(x + 4y³)', '-(2x + y)/(x + 4y³)', '-(2x + y)/4y³', '(2x + 3y)/(x + 4y³)'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 94"
    },
    {
        id: 95,
        question: "∫x cos x dx =",
        options: ['A. x sin x + cos x + c', 'sin x + cos x + c', 'x sin x + cos x', 'x sin x - cos x + c', 'x cos x + sin x + c'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 95"
    },
    {
        id: 96,
        question: "∫₀^(π/2) x cos x dx",
        options: ['0', '2', '1', 'D. π/2 - 1', 'π/2'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 96"
    },
    {
        id: 97,
        question: "∫x sin x dx =",
        options: ['x sin x + cos x + c', 'sin x + cos x + c', 'x sin x + cos x', 'x sin x - cos x + c', 'E. -x cos x + sin x + c'],
        correct: 4,
        topic: "Mathematics",
        explanation: "Solution for question 97"
    },
    {
        id: 98,
        question: "∫₀^(π/2) x cos x dx",
        options: ['0', '2', 'C. 1', 'π/2 - 1', 'π/2'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 98"
    },
    {
        id: 99,
        question: "Evaluate the line integral I = ∫_c (x² + 2y)dx + (x + y²)dy from A(0, 1) to B(2, 3) along the curve c, defined by y = x + 1.",
        options: ['A. 64/3', '64', '32/3', '32', '1/32'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 99"
    },
    {
        id: 100,
        question: "Evaluate ∫_c (x + 2y)dx from A(0, 1) to B(1, 0) along the curve c defined by y = 1 - x.",
        options: ['-1', 'B. 1', '0', '2', '-2'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 100"
    },
    {
        id: 101,
        question: "Evaluate I = ∫_C {(x + y)dx + xy dy} from O(0, 0) to A(1,0) along the line y = 0 and from A(1,0) to B(1,1) along the line x = 1",
        options: ['A. -1', '2', '-2', '0', '1'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 101"
    },
    {
        id: 102,
        question: "Compute the partial derivative of the function f(x, y, z) = e^(1 - x cos y) + z with respect to x at the point (1, 0, π).",
        options: ['A. -1', '-1/e', '0', 'π/e', 'π'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 102"
    },
    {
        id: 103,
        question: "The maximum value of xy on the ellipse 6x² + 4y² = 1 occurs at a point (x,y) for which y² is equal to",
        options: ['√(2/3)', 'B. 1/2', '2/3', '5/11', '10/11'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 103"
    },
    {
        id: 104,
        question: "The tangent plane to the graph of the function z = x²y + 1/(1 + y²) at the point (1, 1, 3/2) contains point (2, 2, t) for which value of t?",
        options: ['8 1/5', '1 + 7/(4√2)', 'C. 4', '5', 'none of the above'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 104"
    },
    {
        id: 105,
        question: "Which of the quantities is nearest to the value of exp(0.003/1.001) cos(0.002)?",
        options: ['1', '1.001', '1.002', 'D. 1.003', '1.000006'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 105"
    },
    {
        id: 106,
        question: "Given 5e^(3x) + sin x, dy/dx is",
        options: ['5e^(3x) + sin x', 'B. 15e^(3x) + cos x', '15e^(3x) - cos x', '5e^(3x) - sin x', 'e^x'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 106"
    },
    {
        id: 107,
        question: "Given y = sin 2x, dy/dx at x = 3 is most nearly",
        options: ['0.9600', '0.9945', 'C. 1.920', '1.989', '0'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 107"
    },
    {
        id: 108,
        question: "Given x³ ln x, dy/dx is",
        options: ['x³ ln x', 'B. 3x² ln x', '3x² ln x + x²', '2x', '3x'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 108"
    },
    {
        id: 109,
        question: "The velocity of a body as a function of time is given as v(t) = 5e^(-2t) + 4, where t is in seconds, and v is in m/s. The acceleration at t = 6.0s is in m/s²",
        options: ['A. -3.012', '5.506', '4.147', '-10.00'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 109"
    },
    {
        id: 110,
        question: "If x² + 2xy = y², then dy/dx is",
        options: ['A. (x + y)/(y - x)', '2x + 2y', '(x + 1)/y', '-x', '-2'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 110"
    },
    {
        id: 111,
        question: "Find the minimum distance from the point (4, 2) to the parabola y² = 8x.",
        options: ['4√3', 'B. 2√2', '√3', '2√3', '2'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 111"
    },
    {
        id: 112,
        question: "A triangle has variable sides x, y, z subject to the constraint such that the perimeter is fixed to 18 cm. What is the maximum possible area for the triangle?",
        options: ['A. 15.59 cm²', '18.71 cm²', '17.15 cm²', '14.03 cm²', '-17.15 cm²'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 112"
    },
    {
        id: 113,
        question: "A farmer has enough money to build only 100 meters of fence. What are the dimensions of the field he can enclose the maximum area?",
        options: ['A. 25 m x 25 m', '15 m x 35 m', '20 m x 30 m', '22.5 m x 27.5 m', '10 m x 35 m'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 113"
    },
    {
        id: 114,
        question: "Find the minimum amount of tin sheet that can be made into a closed cylinder having a volume of 108 cu. inches in square inches.",
        options: ['A. 125.50', '127.50', '129.50', '123.50', '250.50'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 114"
    },
    {
        id: 115,
        question: "Find the derivative of the function f(x) = sin x cos x",
        options: ['sin²x cos x', 'B. cos²x - sin²x', 'cos²x + sin²x', '-cos²x - sin²x', '-cos²x + sin²x'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 115"
    },
    {
        id: 116,
        question: "Evaluate lim(x→∞) (5x + 4)/(x² + 2x - 1)",
        options: ['-∞', '0', 'C. 1', '5', '∞'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 116"
    },
    {
        id: 117,
        question: "The cost fuel in running a locomotive is proportional to the square of the speed and is $25 per hour for a speed of 25 miles per hour. Other costs amount to $100 per hour, regardless of the speed. What is the speed which will make the cost per mile a minimum?",
        options: ['40 mph', '55 mph', 'C. 50 mph', '45 mph'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 117"
    },
    {
        id: 118,
        question: "If f(x) = √x, find f^(11)(4)",
        options: ['-1/2', 'B. -1/32', '0', '1/8', '2'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 118"
    },
    {
        id: 119,
        question: "The coordinates (x, y) in feet of a moving particle P are given by x = cos t - 1 and y = 2 sin t - 1, where t is the time in seconds. At what extreme rates in fps is P moving along the curve?",
        options: ['3 and 2', '3 and 1', '2 and 0.5', 'D. 2 and 1', '3 and 1'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 119"
    },
    {
        id: 120,
        question: "find the critical numbers of y = 4x³ - x⁴",
        options: ['0', '2', 'C. 0 and 3', '0 and 4', 'No critical number'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 120"
    },
    {
        id: 121,
        question: "The slope of the tangent to the curve y = x³ + 5 at the point (1,2) is",
        options: ['6', '2', '5', 'D. 3', 'None of the above'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 121"
    },
    {
        id: 122,
        question: "Water is pouring into a swimming pool. After t hours, there are t + √t gallons in the pool. At what rate is the water pouring into the pool when t = 9 hours?",
        options: ['A. 7/6 gph', '8/7 gph', '6/5 gph', '5/4 gph', '1/5 gph'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 122"
    },
    {
        id: 123,
        question: "A balloon is rising vertically over a point A on the ground at the rate of 15 ft./sec. A point B on the ground level with and 30 ft. from A. When the balloon is 40 ft. from A, at what rate is its distance from B changing?",
        options: ['13 ft/sec', '15 ft/sec', 'C. 12 ft/sec', '10 ft/sec', '23 ft/sec'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 123"
    },
    {
        id: 124,
        question: "The function f(x) = x⁴ - 6x² is increasing on the intervals",
        options: ['(0, √3) only', '(-∞, -√3) and (0, √3) only', '(√3, ∞) only', 'D. (-√3, 0) and (√3, ∞) only', 'None of the above'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 124"
    },
    {
        id: 125,
        question: "The function f(x) = x⁴ - 6x² is concave down on the intervals",
        options: ['A. (-1, 1) only', '(-√3, √3) only', '(-∞, -1) and (1, ∞) only', '(1, √3) only', 'None of the above'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 125"
    },
    {
        id: 126,
        question: "The linear approximation of √(5 - x) at x = 1 is",
        options: ['A. y = -1/4 x + 9/4', 'y = -3/4 x + 7/4', 'y = 1/4 x + 7/4', 'y = -3/4 x + 9/4', 'y = 1/4 x - 7/4'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 126"
    },
    {
        id: 127,
        question: "Car A moves due East at 30 kph at the same instant car B is moving S 30° E, with a speed of 60 kph. The distance from A to B is 30 km. Find how fast is the distance between them separating after one hour.",
        options: ['36 kph', '38 kph', '40 kph', 'D. 45 kph', '38 kph'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 127"
    },
    {
        id: 128,
        question: "A function is given below, what x value maximizes y? y² + y + x² - 2x = 5",
        options: ['2.23', '-1', '5', 'D. 1', '5'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 128"
    },
    {
        id: 129,
        question: "The number of newspaper copies distributed is given by C = 50t² - 200t + 10000 where t is in years. Find the minimum number of copies distributed from 1995 to 2002.",
        options: ['9850', 'B. 9800', '10200', '7500', '9500'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 129"
    },
    {
        id: 130,
        question: "The cost C of a product is a function of the quantity x of the product is given by the relation: C(x) = x² - 4000x + 50. Find the quantity for which the cost is a minimum.",
        options: ['3000', 'B. 2000', '1000', '1500', '2500'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 130"
    },
    {
        id: 131,
        question: "A rectangular field is to be fenced into four equal parts. What is the size of the largest field that can be fenced this way with a fencing length of 1500 feet if the division is to be parallel to one side?",
        options: ['65,200', 'B. 62,500', '64,500', '63,500', '65,500'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 131"
    },
    {
        id: 132,
        question: "The function f is given by f(x) = x⁴ + 4x³. On which of the following intervals is f decreasing?",
        options: ['(-3, 0)', '(0, ∞)', 'C. (-3, ∞)', '(-∞, -3)', '(-∞, 0)'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 132"
    },
    {
        id: 133,
        question: "The value of c that satisfies the mean value theorem on the interval [0,5] for the function f(x) = x³ - 6x is",
        options: ['-5/3', '0', '1', '5/3', 'E. -5/√3'],
        correct: 4,
        topic: "Mathematics",
        explanation: "Solution for question 133"
    },
    {
        id: 134,
        question: "The graph of the function y = x³ + 12x² + 15x + 3 has a relative maximum at x =",
        options: ['-10.613', '-0.248', 'C. -7.317', '-1.138', '-0.683'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 134"
    },
    {
        id: 135,
        question: "If x³ + y³ = 3cx², obtain the derivative dy/dx",
        options: ['A. (2cx - x²)/y²', '2cx + x²/y²', '2cx - x²/y²', '2cx + x²/y²', '2cx - x²'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 135"
    },
    {
        id: 136,
        question: "if u³ + xy - u² = 6. Obtain the value of ∂²y/∂x² at (0, 1, 2)",
        options: ['1/4', 'B. -1/11', '6', '1', '2'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 136"
    },
    {
        id: 137,
        question: "Find the area of the surface generated by revolving the curve with parametric equations x(u) = 3t(u - 2), y(u) = 8u^(3/2)",
        options: ['A. 39π', '-39π', '8π', '3π', '39/2π'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 137"
    },
    {
        id: 138,
        question: "Evaluate ∫∫_D (u² + v²) dudv, where D is bounded by v = u, v = 4u²",
        options: ['384/35', '768/35', '-384/35', 'D. 768/35', 'None of the above'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 138"
    },
    {
        id: 139,
        question: "Find the derivative of the function f(u) = sin u cos u",
        options: ['sin²u cos u', 'B. cos²u - sin²u', 'cos²u + sin²u', '-cos²u - sin²u', '-cos²u + sin²u'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 139"
    },
    {
        id: 140,
        question: "Evaluate lim(u→∞) (5u + 4)/(u² + 2u - 1)",
        options: ['-∞', '0', 'C. 1', '5', '∞'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 140"
    },
    {
        id: 141,
        question: "Evaluate ∫₀^(π/2) sin⁷u du",
        options: ['6/7', '4/5', '2/3', '3/8', 'E. 16/35'],
        correct: 4,
        topic: "Mathematics",
        explanation: "Solution for question 141"
    },
    {
        id: 142,
        question: "Obtain the derivative of y = e^(ax) cos(mx + c)",
        options: ['A. e^(ax)[a cos(mx+c) - m sin(mx+c)]', 'e^(ax) cos(mx+c)', 'a cos(mx+c)', '-m sin(mx+c)', '-a cos(mx+c)'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 142"
    },
    {
        id: 143,
        question: "Given that y = u² sin u, obtain dy/du",
        options: ['u² cos u', 'cos u', 'sin u', 'D. u² cos u + 2u sin u', 'u² cos u - 2u sin u'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 143"
    },
    {
        id: 144,
        question: "Obtain the derivative of y = v^(n-1) ln v at v = 1/2",
        options: ['v^(n-1) ln v', 'v^(n-1) ln 2v', 'C. (n-1)v^(n-2) ln v + v^(n-2)', '(n-1)v^(n-2) ln v + (n-1)v^(n-2)', '(n-1)v^(n-1) ln v + (n-1)v^(n-2)'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 144"
    },
    {
        id: 145,
        question: "Given that f(r) = r² in (1, 5). Obtain the value of c which satisfies the mean value theorem",
        options: ['2', 'B. 3', '-1', '1', '0'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 145"
    },
    {
        id: 146,
        question: "A statue 3 m high is standing on a base of 4 m high. If an observer's eye is 1.5 m above the ground, how far should he stand from the base in order that the angle subtended by the statue is a maximum?",
        options: ['3.41 m', '3.51 m', 'C. 3.71 m', '4.41 m', '4.43'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 146"
    },
    {
        id: 147,
        question: "An iron bar 20 m long is bent to form a closed plane area. What is the largest area possible?",
        options: ['21.56 square meter', '25.68 square meter', '28.56 square meter', 'D. 31.83 square meter', '22.56 square meter'],
        correct: 3,
        topic: "Mathematics",
        explanation: "Solution for question 147"
    },
    {
        id: 148,
        question: "If f(m) = √m, find f^(11)(4)",
        options: ['-1/2', 'B. -1/32', '0', '1/8', '2'],
        correct: 1,
        topic: "Mathematics",
        explanation: "Solution for question 148"
    },
    {
        id: 149,
        question: "If f(x) = ln x within the interval (u², u³). Obtain the value of c which satisfies the mean value theorem.",
        options: ['A. (u-1)u²', '(u-1)', '(u-2)', '2(u-1)', 'u²'],
        correct: 0,
        topic: "Mathematics",
        explanation: "Solution for question 149"
    },
    {
        id: 150,
        question: "Evaluate lim(x→0) (e^(ax) - e^(-ax))/ln(1 + cx)",
        options: ['a', 'x', 'C. 2a/c', 'a/c', '1/c'],
        correct: 2,
        topic: "Mathematics",
        explanation: "Solution for question 150"
    },
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MAT201_QUESTIONS;
}
