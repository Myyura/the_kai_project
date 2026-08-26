---
sidebar_label: "2025年度 物理（4）"
tags:
  - Tohoku-University
  - Physics.Quantum-Mechanics.Harmonic-Oscillator-Ground-State
  - Physics.Electromagnetism.Cyclotron-Motion
  - Physics.Quantum-Mechanics.Landau-Levels-in-Uniform-Magnetic-Field
  - Physics.Electromagnetism.Gauge-Transformation-and-Gauge-Invariance
  - Mathematics.Differential-Equations.Hermite-Equation-and-Polynomial-Recurrence
  - Mathematics.Differential-Equations.Power-Series-Solution-and-Coefficient-Recurrence
---
# 東北大学 理学研究科 天文学専攻 2025年度 物理（4）

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 問1

質量 $m$、角振動数 $\omega$ の一次元調和振動子を考える。

#### (a)

波動関数を $\phi(x)$、エネルギーを $E$ として、時間に依存しない Schrödinger 方程式を書け。

#### (b)

無次元量

   $$
   \xi=\sqrt{\frac{m\omega}{\hbar}}x,
   \qquad
   \epsilon=\frac{2E}{\hbar\omega}
   $$

を用いて方程式を無次元化せよ。

#### (c)

$|\xi|$ が大きいとき、規格化可能な波動関数が

   $$
   \phi(\xi)\simeq\exp\left(-\frac{\xi^2}{2}\right)
   $$

と漸近することを示せ。

#### (d)

$\phi(\xi)=H(\xi)e^{-\xi^2/2}$ とおき、$H$ の微分方程式を求めよ。

#### (e)

$H(\xi)=\sum_{n=0}^{\infty}a_n\xi^n$ として、$a_n$ の漸化式を求めよ。

#### (f)

規格化可能性から級数が有限次数で終わることを用いて、

   $$
   E_n=\hbar\omega\left(n+\frac12\right)
   $$

を示せ。

### 問2

$z$ 方向の一様な磁場 $\boldsymbol B=B\boldsymbol e_z$ 中の電子を考える。スピンは無視し、電子の質量を $m$、電荷を $-e$ とする。

#### (a)

電磁場が、任意のスカラー関数 $\lambda$ に対する

$$
\phi'=\phi+\frac{\partial\lambda}{\partial t},
\qquad
\boldsymbol A'=\boldsymbol A-\nabla\lambda
$$

で不変であることを示し、この性質の名称を答えよ。

#### (b)

$\boldsymbol B=B\boldsymbol e_z$ を与え、$A_x=A_z=0$ を満たす最も簡単な $A_y$ を求めよ。

電子の Hamiltonian は

$$
\hat H=\frac1{2m}
[\hat{\boldsymbol p}+e\boldsymbol A(\hat{\boldsymbol x})]^2
$$

とする。

#### (c)

$z$ 方向の運動量 $p_z$ が保存することを示せ。

#### (d)

$x$–$y$ 平面内では

$$
\hat H=\frac1{2m}\left[\hat p_x^2+(\hat p_y+eA_y)^2\right]
$$

となる。$[\hat p_y,\hat H]=0$ を示せ。

#### (e)

$\hat p_y$ の固有値を $k_y$ とするとき、$x$ 方向の運動が調和振動子に対応することを示せ。

#### (f)

量子化されたエネルギー準位（Landau 準位）を求めよ。

#### (g)

基底状態と第 $n$ 励起状態のエネルギー差を

$$
\Delta E_n=nX\left(\frac{B}{1\ \mathrm{T}}\right)\mathrm{eV}
$$

と書き、$X$ を有効数字1桁で求めよ。必要なら

$$
\hbar=6.6\times10^{-16}\ \mathrm{eV\,s},\quad
m=9.1\times10^{-31}\ \mathrm{kg},\quad
e=1.6\times10^{-19}\ \mathrm C
$$

を用いてよい。

#### (h)

ある天体の X 線スペクトルに、ほぼ等間隔の吸収構造が観測された。図の矢印の概略位置は次の通りである。これらを電子の Landau 準位によるものとして磁場 $B$ を推定せよ。

| 吸収構造 | エネルギー |
|---:|---:|
| 1 | 約 $28\ \mathrm{keV}$ |
| 2 | 約 $55\ \mathrm{keV}$ |
| 3 | 約 $80\ \mathrm{keV}$ |

## **Kai**

### 問1

#### (a)

$$
-\frac{\hbar^2}{2m}\frac{d^2\phi}{dx^2}
+\frac12m\omega^2x^2\phi=E\phi.
$$

#### (b)

$$
-\frac{d^2\phi}{d\xi^2}+\xi^2\phi=\epsilon\phi.
$$

#### (c)

$\phi=e^{S}$ とおくと

$$
-S''-(S')^2+\xi^2=\epsilon.
$$

$|\xi|\to\infty$ では $(S')^2\simeq\xi^2$ だから $S\simeq\pm\xi^2/2$。規格化可能な方を選び、

$$
\phi(\xi)\simeq e^{-\xi^2/2}.
$$

#### (d)

代入すると

$$
H''-2\xi H'+(\epsilon-1)H=0.
$$

#### (e)

係数比較により

$$
(n+2)(n+1)a_{n+2}+(\epsilon-1-2n)a_n=0,
$$

すなわち

$$
a_{n+2}=\frac{2n+1-\epsilon}{(n+2)(n+1)}a_n.
$$

#### (f)

級数が $n=N$ で終わるには

$$
2N+1-\epsilon=0
$$

が必要である。したがって

$$
\epsilon_N=2N+1,
\qquad
E_N=\frac{\hbar\omega}{2}\epsilon_N
=\hbar\omega\left(N+\frac12\right).
$$

### 問2

#### (a)

$$
\begin{aligned}
\boldsymbol E'
&=-\nabla\phi'-\frac{\partial\boldsymbol A'}{\partial t}
=-\nabla\phi-\frac{\partial\boldsymbol A}{\partial t}
=\boldsymbol E,\\
\boldsymbol B'
&=\nabla\times\boldsymbol A'
=\nabla\times\boldsymbol A
=\boldsymbol B.
\end{aligned}
$$

したがって電磁場は不変である。この性質を gauge invariance（ゲージ不変性）という。

#### (b)

$$
\boxed{\boldsymbol A=(0,Bx,0)}
$$

とすれば $(\nabla\times\boldsymbol A)_z=\partial A_y/\partial x=B$ となる。

#### (c)

$\boldsymbol A$ と $\hat H$ は $z$ に依存しないから

$$
\frac{d\hat p_z}{dt}
=\frac1{i\hbar}[\hat p_z,\hat H]
=0.
$$

よって $p_z$ は保存する。

#### (d)

$A_y=Bx$ は $y$ に依存せず、$[\hat p_y,\hat p_x]=[\hat p_y,\hat x]=0$ である。したがって

$$
\boxed{[\hat p_y,\hat H]=0}.
$$

#### (e)

$\hat p_y$ の固有値を $k_y$ とすると

$$
\begin{aligned}
\hat H_x
&=\frac{\hat p_x^2}{2m}+\frac{(k_y+eBx)^2}{2m}\\
&=\frac{\hat p_x^2}{2m}
+\frac12m\omega_c^2(x+x_0)^2,
\end{aligned}
$$

ただし

$$
\omega_c=\frac{eB}{m},\qquad x_0=\frac{k_y}{eB}.
$$

よって中心が $-x_0$ の調和振動子である。

#### (f)

問1の結果より

$$
\boxed{E_n=\hbar\omega_c\left(n+\frac12\right)
=\frac{\hbar eB}{m}\left(n+\frac12\right)}
\qquad(n=0,1,2,\ldots).
$$

#### (g)

$$
\Delta E_n=n\frac{\hbar eB}{m}
=n\left(\frac{\hbar e}{m}\,1\mathrm T\right)
\left(\frac{B}{1\mathrm T}\right).
$$

したがって

$$
X=\frac{(6.6\times10^{-16})(1.6\times10^{-19})}
{9.1\times10^{-31}}
=1.16\times10^{-4}.
$$

有効数字1桁で

$$
\boxed{X=1\times10^{-4}}.
$$

#### (h)

吸収構造の間隔は約 $28\ \mathrm{keV}$ なので

$$
B\simeq
\frac{2.8\times10^4\ \mathrm{eV}}
{1.16\times10^{-4}\ \mathrm{eV/T}}
=2.4\times10^8\ \mathrm T.
$$

したがって

$$
\boxed{B\simeq2.4\times10^8\ \mathrm T
=2.4\times10^{12}\ \mathrm G}.
$$

## **Reference**

- [東北大学 天文学専攻 令和7年度筆記試験問題](https://www.astr.tohoku.ac.jp/examinee/pdf/exam07.pdf)
- [Miyake：2025年度 物理（4）問1](https://miyake.github.io/exams/東北大学/理学研究科_天文学専攻/2025年度_4_1.html)
