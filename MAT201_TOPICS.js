// MAT201 Topics with Explanations and Examples
const MAT201_TOPICS = [
    {
        id: 1,
        name: "Implicit Differentiation & Tangent Lines",
        icon: "📐",
        explanation: `
            <h3>How to Solve Implicit Differentiation Problems</h3>
            <p><strong>Key Concept:</strong> When you can't easily solve for y in terms of x, differentiate both sides with respect to x, treating y as a function of x.</p>
            
            <h4>Step-by-Step Method:</h4>
            <ol>
                <li><strong>Differentiate both sides</strong> with respect to x</li>
                <li><strong>Apply chain rule</strong> to terms with y (multiply by dy/dx)</li>
                <li><strong>Collect all dy/dx terms</strong> on one side</li>
                <li><strong>Solve for dy/dx</strong></li>
                <li><strong>For tangent lines:</strong> Use point-slope form: y - y₁ = m(x - x₁)</li>
            </ol>
            
            <h4>Common Formulas:</h4>
            <ul>
                <li>d/dx(y²) = 2y(dy/dx)</li>
                <li>d/dx(xy) = x(dy/dx) + y (product rule)</li>
                <li>d/dx(y³) = 3y²(dy/dx)</li>
                <li>Slope of tangent = dy/dx at the point</li>
                <li>Tangent line: y - y₁ = m(x - x₁)</li>
            </ul>
        `,
        examples: [1, 2, 3, 94, 110, 135]
    },
    {
        id: 2,
        name: "Partial Derivatives",
        icon: "∂",
        explanation: `
            <h3>How to Solve Partial Derivative Problems</h3>
            <p><strong>Key Concept:</strong> Partial derivatives measure how a function changes with respect to one variable while keeping others constant.</p>
            
            <h4>Step-by-Step Method:</h4>
            <ol>
                <li><strong>∂f/∂x:</strong> Differentiate with respect to x, treat y and z as constants</li>
                <li><strong>∂f/∂y:</strong> Differentiate with respect to y, treat x and z as constants</li>
                <li><strong>Mixed partials:</strong> ∂²f/∂x∂y means differentiate first by y, then by x</li>
                <li><strong>Evaluate at point:</strong> Substitute the given coordinates</li>
            </ol>
            
            <h4>Common Rules:</h4>
            <ul>
                <li>∂/∂x(x²y) = 2xy (y is constant)</li>
                <li>∂/∂y(x²y) = x² (x is constant)</li>
                <li>∂/∂x(e^(xy)) = ye^(xy)</li>
                <li>∂/∂x(sin(xy)) = y·cos(xy)</li>
                <li>Chain rule: ∂f/∂x = (∂f/∂u)(∂u/∂x)</li>
            </ul>
        `,
        examples: [5, 6, 65, 66, 67, 68, 69, 70, 71, 72]
    },
    {
        id: 3,
        name: "Homogeneous Functions",
        icon: "🔢",
        explanation: `
            <h3>How to Find Degree of Homogeneous Functions</h3>
            <p><strong>Key Concept:</strong> A function f(x,y) is homogeneous of degree n if f(tx, ty) = t^n · f(x,y)</p>
            
            <h4>Step-by-Step Method:</h4>
            <ol>
                <li><strong>Replace x with tx and y with ty</strong></li>
                <li><strong>Factor out t^n</strong> from the expression</li>
                <li><strong>The exponent n is the degree</strong></li>
            </ol>
            
            <h4>Quick Rules:</h4>
            <ul>
                <li>x^a · y^b has degree a + b</li>
                <li>(x² + y²)^n has degree 2n</li>
                <li>x^a / y^b has degree a - b</li>
                <li>tan⁻¹(y/x) has degree 0</li>
            </ul>
            
            <h4>Example:</h4>
            <p>f(x,y) = x³y² has degree 3 + 2 = 5</p>
            <p>f(x,y) = (x² + y²)³ has degree 2 × 3 = 6</p>
        `,
        examples: [7, 8]
    },
    {
        id: 4,
        name: "Taylor & Maclaurin Series",
        icon: "∞",
        explanation: `
            <h3>How to Expand Functions Using Series</h3>
            <p><strong>Key Concept:</strong> Express functions as infinite sums of terms calculated from derivatives.</p>
            
            <h4>Maclaurin Series (at x=0):</h4>
            <p>f(x) = f(0) + f'(0)x + f''(0)x²/2! + f'''(0)x³/3! + ...</p>
            
            <h4>Common Series to Memorize:</h4>
            <ul>
                <li><strong>e^x</strong> = 1 + x + x²/2! + x³/3! + x⁴/4! + ...</li>
                <li><strong>sin x</strong> = x - x³/3! + x⁵/5! - x⁷/7! + ...</li>
                <li><strong>cos x</strong> = 1 - x²/2! + x⁴/4! - x⁶/6! + ...</li>
                <li><strong>sinh x</strong> = x + x³/3! + x⁵/5! + x⁷/7! + ...</li>
                <li><strong>cosh x</strong> = 1 + x²/2! + x⁴/4! + x⁶/6! + ...</li>
            </ul>
            
            <h4>For Two Variables f(x,y):</h4>
            <p>Calculate fx, fy, fxx, fxy, fyy and substitute into Taylor formula</p>
        `,
        examples: [9, 10, 11, 12, 13, 18, 19, 53, 54, 55, 56]
    },
    {
        id: 5,
        name: "Optimization & Stationary Points",
        icon: "📊",
        explanation: `
            <h3>How to Find Maximum and Minimum Points</h3>
            <p><strong>Key Concept:</strong> Find where derivatives equal zero, then test to classify the points.</p>
            
            <h4>For Single Variable f(x):</h4>
            <ol>
                <li><strong>Find f'(x) = 0</strong> to get critical points</li>
                <li><strong>Use second derivative test:</strong>
                    <ul>
                        <li>f''(x) > 0 → Minimum</li>
                        <li>f''(x) < 0 → Maximum</li>
                        <li>f''(x) = 0 → Inconclusive</li>
                    </ul>
                </li>
            </ol>
            
            <h4>For Two Variables f(x,y):</h4>
            <ol>
                <li><strong>Find fx = 0 and fy = 0</strong> simultaneously</li>
                <li><strong>Calculate D = fxx·fyy - (fxy)²</strong></li>
                <li><strong>Test each point:</strong>
                    <ul>
                        <li>D > 0 and fxx > 0 → Minimum</li>
                        <li>D > 0 and fxx < 0 → Maximum</li>
                        <li>D < 0 → Saddle point</li>
                    </ul>
                </li>
            </ol>
            
            <h4>Applied Problems:</h4>
            <p>Set up equation, find derivative, solve for zero, verify with second derivative</p>
        `,
        examples: [20, 21, 22, 23, 24, 25, 91, 92, 93, 111, 112, 113, 114]
    },
    {
        id: 6,
        name: "Integration Techniques",
        icon: "∫",
        explanation: `
            <h3>How to Solve Integration Problems</h3>
            <p><strong>Key Concept:</strong> Reverse process of differentiation with various techniques.</p>
            
            <h4>Common Integration Methods:</h4>
            
            <h5>1. Integration by Parts:</h5>
            <p>∫u dv = uv - ∫v du</p>
            <p><strong>Choose u using LIATE:</strong> Logarithmic, Inverse trig, Algebraic, Trig, Exponential</p>
            
            <h5>2. Partial Fractions:</h5>
            <ol>
                <li>Factor denominator</li>
                <li>Write as sum: A/(x-a) + B/(x-b)</li>
                <li>Solve for A and B</li>
                <li>Integrate each term</li>
            </ol>
            
            <h5>3. Trigonometric Powers:</h5>
            <p>∫sin^n x dx: Use reduction formula or identity sin²x = (1-cos2x)/2</p>
            
            <h4>Common Integrals:</h4>
            <ul>
                <li>∫x^n dx = x^(n+1)/(n+1) + C</li>
                <li>∫e^x dx = e^x + C</li>
                <li>∫sin x dx = -cos x + C</li>
                <li>∫cos x dx = sin x + C</li>
                <li>∫1/x dx = ln|x| + C</li>
            </ul>
        `,
        examples: [26, 32, 33, 95, 96, 97, 98, 141]
    },
    {
        id: 7,
        name: "Volumes & Surface Area of Revolution",
        icon: "🔄",
        explanation: `
            <h3>How to Calculate Volumes and Surface Areas</h3>
            <p><strong>Key Concept:</strong> Rotate curves around axes to create 3D solids.</p>
            
            <h4>Volume by Disk Method (around x-axis):</h4>
            <p>V = π∫[a to b] y² dx</p>
            
            <h4>Volume by Shell Method:</h4>
            <p>V = 2π∫[a to b] x·y dx</p>
            
            <h4>Volume by Washer Method:</h4>
            <p>V = π∫[a to b] (R² - r²) dx</p>
            <p>Where R = outer radius, r = inner radius</p>
            
            <h4>Surface Area of Revolution:</h4>
            <p>S = 2π∫[a to b] y√(1 + (dy/dx)²) dx</p>
            
            <h4>For Parametric Curves:</h4>
            <p>S = 2π∫[t1 to t2] y(t)√((dx/dt)² + (dy/dt)²) dt</p>
            
            <h4>Steps:</h4>
            <ol>
                <li>Identify the curve and axis of rotation</li>
                <li>Choose appropriate formula</li>
                <li>Set up integral with correct limits</li>
                <li>Evaluate the integral</li>
            </ol>
        `,
        examples: [27, 28, 29, 30, 137]
    },
    {
        id: 8,
        name: "Double Integrals",
        icon: "∬",
        explanation: `
            <h3>How to Evaluate Double Integrals</h3>
            <p><strong>Key Concept:</strong> Integrate over a 2D region by integrating twice.</p>
            
            <h4>Step-by-Step Method:</h4>
            <ol>
                <li><strong>Sketch the region D</strong> bounded by the curves</li>
                <li><strong>Determine limits:</strong>
                    <ul>
                        <li>Outer integral: x from a to b</li>
                        <li>Inner integral: y from g₁(x) to g₂(x)</li>
                    </ul>
                </li>
                <li><strong>Set up integral:</strong> ∫∫_D f(x,y) dA = ∫[a to b]∫[g₁(x) to g₂(x)] f(x,y) dy dx</li>
                <li><strong>Integrate inside first</strong> (with respect to y)</li>
                <li><strong>Then integrate outside</strong> (with respect to x)</li>
            </ol>
            
            <h4>Order of Integration:</h4>
            <p>Can switch order: dy dx ↔ dx dy (change limits accordingly)</p>
            
            <h4>Common Regions:</h4>
            <ul>
                <li>Rectangle: constant limits for both variables</li>
                <li>Triangle: one variable has function limits</li>
                <li>Between curves: limits are the curve equations</li>
            </ul>
        `,
        examples: [31, 37, 138]
    },
    {
        id: 9,
        name: "Limits & Continuity",
        icon: "→",
        explanation: `
            <h3>How to Evaluate Limits</h3>
            <p><strong>Key Concept:</strong> Find the value a function approaches as x approaches a point.</p>
            
            <h4>Methods for Evaluating Limits:</h4>
            
            <h5>1. Direct Substitution:</h5>
            <p>Try plugging in the value first. If you get a number, that's the limit!</p>
            
            <h5>2. L'Hôpital's Rule (for 0/0 or ∞/∞):</h5>
            <p>lim[x→a] f(x)/g(x) = lim[x→a] f'(x)/g'(x)</p>
            <p>Keep differentiating top and bottom until you can substitute</p>
            
            <h5>3. Algebraic Manipulation:</h5>
            <ul>
                <li>Factor and cancel</li>
                <li>Multiply by conjugate</li>
                <li>Combine fractions</li>
            </ul>
            
            <h5>4. For Indeterminate Forms:</h5>
            <ul>
                <li>0/0 → Use L'Hôpital's Rule</li>
                <li>∞/∞ → Use L'Hôpital's Rule</li>
                <li>0·∞ → Rewrite as fraction</li>
                <li>1^∞ → Use ln and exponential</li>
            </ul>
            
            <h4>Continuity:</h4>
            <p>f is continuous at x=a if: lim[x→a] f(x) = f(a)</p>
        `,
        examples: [34, 57, 58, 59, 60, 61, 62, 63, 64, 116, 150]
    },
    {
        id: 10,
        name: "Higher Order Derivatives",
        icon: "d²/dx²",
        explanation: `
            <h3>How to Find Higher Order Derivatives</h3>
            <p><strong>Key Concept:</strong> Differentiate multiple times to get second, third, nth derivatives.</p>
            
            <h4>Common Differentiation Rules:</h4>
            
            <h5>Product Rule:</h5>
            <p>(uv)' = u'v + uv'</p>
            
            <h5>Quotient Rule:</h5>
            <p>(u/v)' = (u'v - uv')/v²</p>
            
            <h5>Chain Rule:</h5>
            <p>d/dx[f(g(x))] = f'(g(x))·g'(x)</p>
            
            <h4>Special Functions:</h4>
            <ul>
                <li>d/dx(e^(ax)) = ae^(ax)</li>
                <li>d/dx(sin(ax)) = a·cos(ax)</li>
                <li>d/dx(cos(ax)) = -a·sin(ax)</li>
                <li>d/dx(ln x) = 1/x</li>
                <li>d/dx(x^n) = nx^(n-1)</li>
                <li>d/dx(tan⁻¹x) = 1/(1+x²)</li>
            </ul>
            
            <h4>For Second Derivative:</h4>
            <ol>
                <li>Find first derivative dy/dx</li>
                <li>Differentiate again to get d²y/dx²</li>
            </ol>
            
            <h4>nth Derivative Patterns:</h4>
            <p>Look for patterns: e^(mx) → m^n·e^(mx)</p>
        `,
        examples: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 90, 106, 107, 108, 115]
    },
    {
        id: 11,
        name: "Mean Value Theorem",
        icon: "c",
        explanation: `
            <h3>How to Apply Mean Value Theorem</h3>
            <p><strong>Key Concept:</strong> If f is continuous on [a,b] and differentiable on (a,b), then there exists c in (a,b) such that:</p>
            
            <h4>Mean Value Theorem Formula:</h4>
            <p><strong>f'(c) = [f(b) - f(a)]/(b - a)</strong></p>
            
            <h4>Step-by-Step Method:</h4>
            <ol>
                <li><strong>Calculate f(a) and f(b)</strong> at the endpoints</li>
                <li><strong>Find the slope:</strong> m = [f(b) - f(a)]/(b - a)</li>
                <li><strong>Find f'(x)</strong> (derivative of the function)</li>
                <li><strong>Solve f'(c) = m</strong> for c</li>
                <li><strong>Verify c is in (a,b)</strong></li>
            </ol>
            
            <h4>Special Cases:</h4>
            <ul>
                <li>For linear functions: any c in (a,b) works</li>
                <li>For polynomials: solve algebraically</li>
                <li>For trig functions: use inverse trig to solve</li>
            </ul>
            
            <h4>Example:</h4>
            <p>f(x) = x² on [1,5]</p>
            <p>f'(c) = 2c = (25-1)/(5-1) = 6</p>
            <p>c = 3 ✓</p>
        `,
        examples: [48, 49, 50, 51, 52, 133, 145, 149]
    },
    {
        id: 12,
        name: "Related Rates & Applications",
        icon: "⚡",
        explanation: `
            <h3>How to Solve Related Rates Problems</h3>
            <p><strong>Key Concept:</strong> Find how fast one quantity changes based on how fast another quantity changes.</p>
            
            <h4>Step-by-Step Method:</h4>
            <ol>
                <li><strong>Draw a diagram</strong> and label variables</li>
                <li><strong>Write equation</strong> relating the variables</li>
                <li><strong>Differentiate both sides</strong> with respect to time t</li>
                <li><strong>Substitute known values</strong> (rates and quantities)</li>
                <li><strong>Solve for unknown rate</strong></li>
            </ol>
            
            <h4>Common Formulas:</h4>
            <ul>
                <li><strong>Rectangle Area:</strong> A = xy → dA/dt = x(dy/dt) + y(dx/dt)</li>
                <li><strong>Circle Area:</strong> A = πr² → dA/dt = 2πr(dr/dt)</li>
                <li><strong>Cone Volume:</strong> V = (1/3)πr²h → dV/dt = ...</li>
                <li><strong>Pythagorean:</strong> x² + y² = z² → 2x(dx/dt) + 2y(dy/dt) = 2z(dz/dt)</li>
            </ul>
            
            <h4>Key Tips:</h4>
            <ul>
                <li>Identify what's changing (rates given)</li>
                <li>Identify what you're finding (rate wanted)</li>
                <li>Don't substitute values until AFTER differentiating</li>
                <li>Watch signs: increasing (+), decreasing (-)</li>
            </ul>
        `,
        examples: [78, 79, 80, 81, 82, 83, 84, 85, 86, 119, 122, 123, 127]
    }
];
