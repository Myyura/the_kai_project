---
sidebar_label: '2017年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Control-Theory
  - Mechanics
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2017年8月実施 筆記試験 第2問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

図1のような角度$\theta$の斜面に置かれた質量$M$の台車の位置制御を考える。台車には、斜面に沿った$x$軸方向へ力$f$を加え、移動させることができる。力$f$は台車を引き上げるために十分な大きさを与えることができ、台車と床の摩擦および空気抵抗は無視できるものとする。時刻$t$における力$f$および台車の位置と速度をそれぞれ$f(t)$、$x(t)$、$v(t)$と表記する。また、重力加速度の大きさを$g$とする。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201708_2_p1.png" width="350" alt=""/>
</figure>

時刻$t=0$において$x(0)=0$、$v(0)=0$とする。この台車を$x=L$の位置へ移動させる方法を考える。
以下の問いに答えよ。

(1) 台車を一定の力$f(t)=F (F>0)$で時刻$t_1$まで加速した時の台車の位置と速度を求めよ。

(2) (1)における時刻$t_1$から時刻$t_2$ ($t_2 \ge t_1$)まで台車を一定の力$f(t)=-F (F>0)$で減速し、$x(t_2)=L$、$v(t_2)=0$としたい。この動作を実現する$t_1$と$t_2$を求めよ。

次に、目標位置である$x=L$との差に比例する力を台車に加えることを考える。すなわち、$f(t)=k_1\{L-x(t)\}$を与える。なお、$k_1$は正の定数とする。

(3) この場合の台車の運動方程式を表せ。

(4) $x(t)$をグラフに表せ。

次に、台車の速度に比例した力を更に加えることを考える。すなわち、$f(t)=k_1\{L-x(t)\}-k_2v(t)$を与える。なお、$k_1, k_2$は正の定数とする。

(5) $-k_2v(t)$を加えることによって生じる効果と、その効果が現れる理由を説明せよ。

(6) $x(t)$が振動しないための$k_1, k_2$に関する条件を求めよ。必要であれば以下の事実を用いてよい。

> 微分方程式 $\frac{d^2x}{dt^2}+a\frac{dx}{dt}+bx=0$ ($a,b$は実定数)$\cdots$(A)
> の一般解は、2次方程式 $r^2+ar+b=0\cdots$(B)
> の解によって表すことができ、
> 
> 1. 式(B)が異なる二つの実数解$p,q$を持つとき
> 
> $$
>   x=C_1e^{pt}+C_2e^{qt}
> $$
> 
> 3. 式(B)が異なる二つの虚数解$h\pm ki$を持つとき
> 
> $$
>   x=e^{ht}(C_1\cos kt+C_2\sin kt)
> $$
> 
> 5. 式(B)が重解$p$を持つとき
> 
> $$
>   x=e^{pt}(C_1+C_2t)
> $$
> 
> となる。ただし、$C_1,C_2$ は積分定数である。

(7) (6)で求めた条件において、$x(t)$のグラフを表せ。

次に、目標位置との差の積分値に比例する力をさらに加えることを考える。すなわち、
$f(t)=k_1\{L-x(t)\}-k_2v(t)+k_3\int_0^t\{L-x(\tau)\}d\tau$ を与える。なお、$k_1,k_2,k_3$は正の定数とする。

(8) $k_3\int_0^t\{L-x(\tau)\}d\tau$ を加えることによって生じる効果と、その効果が現れる理由を説明せよ。

## **Description (English)**

Let us consider to control the position of a cart with mass $M$ placed on a slope with angle $\theta$ as illustrated in Figure 1. We can move the cart by force $f$ along the $x$-axis parallel to the slope. Assume that $f$ can be sufficiently large to pull up the cart. Friction between the cart and the slope and air resistance are negligible. We let $f(t), x(t),$ and $v(t)$ denote the force $f$, the position, and the velocity of the cart at time $t$, respectively. The magnitude of gravity acceleration is denoted by $g$.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201708_2_p1.png" width="350" alt=""/>
</figure>

Suppose that $x(0)=0$ and $v(0)=0$ at time $t=0$. We consider a method to move the cart to the position $x=L$. Answer the following questions.

(1) Find the position and the velocity of the cart when we accelerate it with a constant force $f(t)=F$ ($F>0$) until the time $t_1$.

(2) We want to deaccelerate the cart with a constant force $f(t)=-F$ ($F>0$) from the time $t_1$ in Question (1) until the time $t_2$ ($t_2 \ge t_1$) so that $x(t_2)=L$ and $v(t_2)=0$. Find $t_1$ and $t_2$ which realize this motion.

Next, we consider to give a force proportional to the displacement from the target position $x=L$. Specifically, we give $f(t)=k_1\{L-x(t)\}$. $k_1$ is a positive constant.

(3) Write down the equations of motion for this case.

(4) Draw a graph of $x(t)$.

Next, we consider to further add a force proportional to the velocity of the cart. Specifically, we give $f(t)=k_1\{L-x(t)\}-k_2v(t)$. $k_1$ and $k_2$ are positive constants.

(5) Explain an effect caused by adding $-k_2v(t)$ and the reason why this effect occurs.

(6) Find the condition regarding $k_1$ and $k_2$ so that $x(t)$ does not oscillate. You can use the following facts if necessary.

> The general solution of a differential equation 
> $$\frac{d^2x}{dt^2}+a\frac{dx}{dt}+bx=0 \text{ ($a$ and $b$ are real-valued constants)}\cdots\text{(A)}$$ 
> can be represented by the solution of the quadratic equation
> 
> $$
> r^2+ar+b=0\cdots\text{(B)}
> $$
> 
> as follows:
> 1. When Eq.(B) has two different real roots $p$ and $q$,
> 
>   $$
>   x=C_1e^{pt}+C_2e^{qt}
>   $$
> 
> 3. When Eq.(B) has two different imaginary roots $h\pm ki$,
> 
>   $$
>   x=e^{ht}(C_1\cos kt+C_2\sin kt)
>   $$
> 
> 5. When Eq.(B) has a double root $p$,
> 
>   $$
>   x=e^{pt}(C_1+C_2t)
>   $$
>
> Here, $C_1$ and $C_2$ are constants of integration.

(7) Draw a graph of $x(t)$ under the condition obtained in Question (6).

Next, we consider to further add a force proportional to the integral of the displacement from the target position. Specifically, we give $f(t)=k_1\{L-x(t)\}-k_2v(t)+k_3\int_0^t\{L-x(\tau)\}d\tau$. $k_1, k_2,$ and $k_3$ are positive constants.

(8) Explain an effect caused by adding $k_3\int_0^t\{L-x(\tau)\}d\tau$ and the reason why this effect occurs.

## **Kai**
Here are the answers to the questions.

### (1) Constant Force Acceleration

We apply Newton's second law to the motion of the cart along the slope.
The forces acting on the cart are the applied force $F$ (up the slope) and the component of gravity $Mg \sin\theta$ (down the slope).
The equation of motion is:
$$ 
 M a = F - Mg \sin\theta 
$$ 
The acceleration $a_1$ is:
$$ 
 a_1 = \frac{F - Mg \sin\theta}{M} 
$$ 
Since initial velocity $v(0)=0$ and initial position $x(0)=0$, we integrate with respect to time $t$:
**Velocity:**
$$ 
 v(t) = a_1 t = \frac{F - Mg \sin\theta}{M} t 
$$ 
**Position:**
$$ 
 x(t) = \frac{1}{2} a_1 t^2 = \frac{F - Mg \sin\theta}{2M} t^2 
$$ 

### (2) Bang-Bang Control (Acceleration and Deceleration)

Let the acceleration during the first phase ($0 \le t \le t_1$) be $a_1 = \frac{F}{M} - g\sin\theta$.
Let the acceleration during the second phase ($t_1 < t \le t_2$) be $a_2$. The force is $-F$, so:
$$ 
 a_2 = \frac{-F - Mg\sin\theta}{M} = -\frac{F}{M} - g\sin\theta 
$$ 

At time $t_1$, the position $x_1$ and velocity $v_1$ are:
$$ 
 v_1 = a_1 t_1 
$$ 
$$ 
 x_1 = \frac{1}{2} a_1 t_1^2 
$$ 

For $t > t_1$, the velocity is given by $v(t) = v_1 + a_2(t - t_1)$. We require $v(t_2) = 0$:
$$ 
 v_1 + a_2(t_2 - t_1) = 0 \implies t_2 - t_1 = -\frac{v_1}{a_2} 
$$ 
Substituting $v_1 = a_1 t_1$:
$$ 
 t_2 - t_1 = -\frac{a_1 t_1}{a_2} \implies t_2 = t_1 \left(1 - \frac{a_1}{a_2}\right) = t_1 \left(\frac{a_2 - a_1}{a_2}\right) 
$$ 
Let's evaluate the ratio term:
$$ 
 a_2 - a_1 = \left(-\frac{F}{M} - g\sin\theta\right) - \left(\frac{F}{M} - g\sin\theta\right) = -\frac{2F}{M} 
$$ 
So,
$$ 
 t_2 = t_1 \frac{-2F/M}{a_2} = t_1 \frac{2F}{F + Mg\sin\theta} \quad (*1) 
$$ 

Now consider the position. The total distance traveled is $L$.
$$ 
 L = x(t_2) = x_1 + v_1(t_2 - t_1) + \frac{1}{2}a_2(t_2 - t_1)^2 
$$ 
Using $(t_2 - t_1) = -v_1/a_2$:
$$ 
 L = x_1 + v_1\left(\frac{-v_1}{a_2}\right) + \frac{1}{2}a_2\left(\frac{v_1^2}{a_2^2}\right) = x_1 - \frac{v_1^2}{2a_2} 
$$ 
Since $v_1^2 = 2 a_1 x_1$:
$$ 
 L = x_1 - \frac{2 a_1 x_1}{2 a_2} = x_1 \left(1 - \frac{a_1}{a_2}\right) = x_1 \left(\frac{a_2 - a_1}{a_2}\right) 
$$ 
Substituting $x_1 = \frac{1}{2}a_1 t_1^2$:
$$ 
 L = \frac{1}{2}a_1 t_1^2 \left(\frac{-2F/M}{a_2}\right) 
$$ 
Solving for $t_1$:
$$ 
 t_1^2 = \frac{2 L a_2}{a_1 (-2F/M)} = \frac{L (-a_2)}{a_1 (F/M)} 
$$ 
Substitute $a_1$ and $a_2$:
$$ 
 t_1^2 = \frac{L (\frac{F + Mg\sin\theta}{M})}{(\frac{F - Mg\sin\theta}{M}) \frac{F}{M}} = \frac{LM(F + Mg\sin\theta)}{F(F - Mg\sin\theta)} 
$$ 
Thus:
$$ 
 t_1 = \sqrt{\frac{LM(F + Mg\sin\theta)}{F(F - Mg\sin\theta)}} 
$$ 

Using relation $(*1)$ to find $t_2$:
$$ 
 t_2 = \frac{2F}{F + Mg\sin\theta} \sqrt{\frac{LM(F + Mg\sin\theta)}{F(F - Mg\sin\theta)}} = \sqrt{\frac{4F^2 L M}{(F+Mg\sin\theta)(F-Mg\sin\theta)}} 
$$ 
$$ 
 t_2 = \sqrt{\frac{4FLM}{F^2 - (Mg\sin\theta)^2}} 
$$ 

**Answer:**
$$ 
 t_1 = \sqrt{\frac{LM(F + Mg\sin\theta)}{F(F - Mg\sin\theta)}}, \quad t_2 = \sqrt{\frac{4FLM}{F^2 - (Mg\sin\theta)^2}} 
$$ 

### (3) Proportional Control (P-Control) Equation

The force applied is $f(t) = k_1(L - x(t))$. The equation of motion ($Ma = \sum F$) is:
$$ 
 M \frac{d^2x}{dt^2} = k_1(L - x) - Mg \sin\theta 
$$ 
Rearranging the terms:
$$ 
 M \frac{d^2x}{dt^2} + k_1 x = k_1 L - Mg \sin\theta 
$$ 

### (4) Graph of $x(t)$ for P-Control

This is a harmonic oscillator equation centered at an equilibrium point $x_{eq}$ where the net force is zero:
$$ 
 k_1(L - x_{eq}) = Mg\sin\theta \implies x_{eq} = L - \frac{Mg\sin\theta}{k_1} 
$$ 
Given $x(0)=0$ and $v(0)=0$, the motion is a cosine wave shifted to start at zero and oscillating around $x_{eq}$.
$$ 
 x(t) = x_{eq} \left(1 - \cos\left(\sqrt{\frac{k_1}{M}}t\right)\right) 
$$ 
The maximum peak is $2x_{eq}$. The graph oscillates indefinitely between $0$ and $2(L - \frac{Mg\sin\theta}{k_1})$. It does not settle at $L$.

**Graph:**
The vertical axis is $x(t)$, horizontal is $t$. The curve is a sinusoidal wave starting at $(0,0)$, peaking at $x \approx 2L$ (minus the gravity offset), and centered at a level slightly below $L$.

![Graph Description: A cosine wave starting from 0, oscillating between 0 and 2(L - Mg sin(theta)/k1). The center of oscillation (dotted line) is at x = L - Mg sin(theta)/k1.](https://dummyimage.com/400x200/fff/000.png&text=Oscillation+Centered+Below+L)
*(Note: As an AI text model, I describe the graph. The key feature is sustained oscillation centered below the target L due to gravity).*

### (5) Proportional-Derivative (PD) Control

**Effect:** The term $-k_2 v(t)$ acts as a damper (viscous friction). It suppresses the oscillation of the cart, causing the amplitude of the vibration to decay over time so that the position converges to a steady value.
**Reason:** The force $-k_2 v(t)$ is always opposite to the direction of motion. This performs negative work on the system, dissipating kinetic energy until the cart stops moving ($v=0$).

### (6) Condition for Non-oscillatory Motion

The equation of motion is:
$$ 
 M \ddot{x} + k_2 \dot{x} + k_1 x = k_1 L - Mg\sin\theta 
$$ 
The characteristic equation for the homogeneous part ($M r^2 + k_2 r + k_1 = 0$) determines the behavior.
$$ 
 r^2 + \frac{k_2}{M} r + \frac{k_1}{M} = 0 
$$ 
For the solution not to oscillate (no imaginary part), the discriminant $D$ of the quadratic equation must be non-negative ($D \ge 0$).
$$ 
 D = \left(\frac{k_2}{M}\right)^2 - 4(1)\left(\frac{k_1}{M}\right) \ge 0 
$$ 
$$ 
 \frac{k_2^2}{M^2} \ge \frac{4k_1}{M} 
$$ 
Multiplying by $M^2$:
$$ 
 k_2^2 \ge 4 M k_1 
$$ 

### (7) Graph of $x(t)$ for Non-oscillatory PD Control

Under the condition $k_2^2 \ge 4Mk_1$ (overdamped or critically damped), the system approaches the equilibrium without oscillating.
The equilibrium position is found by setting derivatives to zero:
$$ 
 k_1 x_{final} = k_1 L - Mg\sin\theta \implies x_{final} = L - \frac{Mg\sin\theta}{k_1} 
$$ 
The cart starts at $0$ and asymptotically approaches $x_{final}$, which is slightly less than the target $L$ due to gravity (steady-state error).

**Graph:**
The curve starts at $(0,0)$ with zero slope, rises smoothly, and flattens out to approach the horizontal asymptote $x = L - \frac{Mg\sin\theta}{k_1}$ from below. It never crosses $L$.

### (8) Proportional-Integral-Derivative (PID) Control

**Effect:** The addition of the integral term $k_3 \int_0^t \{L-x(\tau)\} d\tau$ eliminates the steady-state error, causing the cart to converge exactly to the target position $x = L$.
**Reason:** In the previous cases (P and PD control), the controller relied on the position error $(L-x)$ to generate force. To counteract gravity ($Mg\sin\theta$), a non-zero error was required (steady-state error).
With the integral term, if there is any steady error $L - x \neq 0$, the integral value grows over time, increasing the applied force $f$. This accumulation continues until the force is sufficient to balance gravity exactly when the error is zero ($x=L$). In steady state, $\dot{x}=0, \ddot{x}=0$, and $x=L$, making the integral term provide the constant force $Mg\sin\theta$.