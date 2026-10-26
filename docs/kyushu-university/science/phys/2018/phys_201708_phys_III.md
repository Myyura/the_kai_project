---
sidebar_label: "2017年8月実施 物理学 [III]"
tags:
  - Kyushu-University
  - Physics.Quantum-Mechanics.One-Dimensional-Infinite-Square-Well
  - Physics.Quantum-Mechanics.Quantum-Observable-Expectation-and-Variance
  - Physics.Quantum-Mechanics.Heisenberg-Uncertainty-and-Minimum-Uncertainty-Gaussian
  - Physics.Quantum-Mechanics.Hydrogen-Atom
  - Physics.Quantum-Mechanics.Angular-Momentum-Addition
---

# 九州大学 理学府 物理学専攻 2017年8月実施 入学試験 物理学 \[III\]

## **Author**

祭音Myyura (Based on [ばたぱら's answer](https://batapara.com/archives/kakomon-9d-h30.html/) refined with GPT 6 Astra)

## **Description**
解答にはプランク定数 $h$ を $2\pi$ で割った定数 $\hbar$ を用いてよい。

### [III-A]

次の一次元ポテンシャル $V(x)$ 中に閉じ込められた、質量 $m$ の粒子の一次元運動を考える。

$$
V(x)=\begin{cases}
0 & (0\le x\le L),\\
\infty & (x<0,\ x>L).
\end{cases}
$$

1. 波動関数 $\psi(x)$ が $0\le x\le L$ で満たす、時間に依存しないシュレディンガー方程式を書け。粒子のエネルギーを $E$ とせよ。
2. $\psi(x)$ の境界条件を全て書け。
3. $0\le x\le L$ で $\psi(x)=A\sin kx+B\cos kx$ とおき、問2の条件を適用して $A,B,k$ を求めよ。$A,B$ は実数であり、$\psi(x)$ は規格化されている。$k$ を表すのに整数 $n$ を用いてよいが、その範囲を示せ。
4. 問3で求めた $\psi(x)$ に対するエネルギー固有値 $E$ を求めよ。
5. $n=2$ の $|\psi(x)|^2$ について、$-L\le x\le 2L$ の範囲でグラフを描け。
6. $n=1$ の $\psi(x)$ に対して、$\langle x\rangle,\langle x^2\rangle,\langle p\rangle,\langle p^2\rangle$ をそれぞれ求めよ。以下の不定積分の公式を参考にしてよい。

$$
\int x\sin^2x\,dx
=\frac{x^2}{4}-\frac{x}{4}\sin2x-\frac18\cos2x+C,
$$

$$
\int x^2\sin^2x\,dx
=\frac{x^3}{6}-\frac{2x^2-1}{8}\sin2x-\frac{x}{4}\cos2x+C.
$$

7. 演算子 $Y$ の不確定性を $\Delta Y=\sqrt{\langle Y^2\rangle-\langle Y\rangle^2}$ で見積もる。問6の結果を用いて $\Delta x\,\Delta p$ を求めよ。

### [III-B]

水素原子のシュレディンガー方程式の解は、動径波動関数 $R_{nl}(r)$ と球面調和関数 $Y_l^m(\theta,\phi)$ の積 $R_{nl}(r)Y_l^m(\theta,\phi)$ で表される。陽子は原点に静止しているとし、電子の位置を極座標 $(r,\theta,\phi)$ で表す。軌道角運動量演算子 $\boldsymbol l$ の $x,y,z$ 成分を $l_x,l_y,l_z$ とし、量子化軸を $z$ 軸にとる。$l_\pm=l_x\pm il_y$ と定義すると、

$$
l_\pm Y_l^m(\theta,\phi)
=\hbar\sqrt{(l\mp m)(l\pm m+1)}\,Y_l^{m\pm1}(\theta,\phi),
\qquad
l_zY_l^m(\theta,\phi)=m\hbar Y_l^m(\theta,\phi)
$$

を満たす。

1. $n,l,m$ の各量子数はそれぞれ何というか。
2. $l_x^2+l_y^2$ を $l_+,l_-$ で表せ。
3. $\boldsymbol l^2Y_l^m(\theta,\phi)$ を計算せよ。

電子はスピン角運動量をもち、その自由度は2である。2つの固有関数を $\alpha,\beta$ とおく。スピン角運動量演算子 $\boldsymbol s$ の $x,y,z$ 成分を $s_x,s_y,s_z$ とし、量子化軸を $z$ 軸にとる。$s_\pm=s_x\pm is_y$ と定義すると、

$$
\begin{aligned}
s_+\alpha&=0,& s_+\beta&=\hbar\alpha,\\
s_-\alpha&=\hbar\beta,&s_-\beta&=0,\\
s_z\alpha&=\frac{\hbar}{2}\alpha,&s_z\beta&=-\frac{\hbar}{2}\beta,\\
\boldsymbol s^2\alpha&=\frac34\hbar^2\alpha,&
\boldsymbol s^2\beta&=\frac34\hbar^2\beta
\end{aligned}
$$

を満たす。

軌道角運動量とスピン角運動量の両方に関係する演算子 $\boldsymbol l\cdot\boldsymbol s$ を考える。$2p$ 軌道の固有関数 $R_{21}(r)Y_1^1(\theta,\phi),R_{21}(r)Y_1^0(\theta,\phi),R_{21}(r)Y_1^{-1}(\theta,\phi)$ をそれぞれ $u_1,u_0,u_{-1}$ と略記し、スピンも含めた6つの関数 $u_1\alpha,u_0\alpha,u_{-1}\alpha,u_1\beta,u_0\beta,u_{-1}\beta$ を考える。

4. $\boldsymbol l\cdot\boldsymbol s=\frac12(l_+s_-+l_-s_+)+l_zs_z$ を用い、次の空欄ア〜エを埋めよ。

$$
\begin{aligned}
(\boldsymbol l\cdot\boldsymbol s)u_1\alpha
&=l_zs_zu_1\alpha=\frac12\hbar^2u_1\alpha,\\
(\boldsymbol l\cdot\boldsymbol s)u_0\alpha
&=\frac12l_+s_-u_0\alpha=\frac{1}{\sqrt2}\hbar^2u_1\beta,\\
(\boldsymbol l\cdot\boldsymbol s)u_{-1}\alpha&=\boxed{\text{ア}},\\
(\boldsymbol l\cdot\boldsymbol s)u_1\beta&=\boxed{\text{イ}},\\
(\boldsymbol l\cdot\boldsymbol s)u_0\beta&=\boxed{\text{ウ}},\\
(\boldsymbol l\cdot\boldsymbol s)u_{-1}\beta&=\boxed{\text{エ}}.
\end{aligned}
$$

5. 基底関数を $u_1\alpha,u_0\alpha,u_1\beta,u_0\beta,u_{-1}\alpha,u_{-1}\beta$ の順にとり、$\boldsymbol l\cdot\boldsymbol s$ の $6\times6$ 行列を対角化したい。そのために、$u_0\alpha,u_1\beta$ を基底とする $2\times2$ の部分行列について考え、2つの固有値を求めよ。以下の正規直交性を用いてよい。$\delta$ はクロネッカーのデルタ、$\sigma$ はスピン座標、$*$ は複素共役を表す。

$$
\int_0^\infty R_{nl}^*(r)R_{n'l}(r)r^2\,dr=\delta_{nn'},
$$

$$
\int_0^{2\pi}\int_0^\pi
Y_l^{m*}(\theta,\phi)Y_{l'}^{m'}(\theta,\phi)
\sin\theta\,d\theta\,d\phi=\delta_{ll'}\delta_{mm'},
$$

$$
\sum_{\sigma=\pm\hbar/2}\alpha^*(\sigma)\alpha(\sigma)
=\sum_{\sigma=\pm\hbar/2}\beta^*(\sigma)\beta(\sigma)=1,
$$

$$
\sum_{\sigma=\pm\hbar/2}\alpha^*(\sigma)\beta(\sigma)
=\sum_{\sigma=\pm\hbar/2}\beta^*(\sigma)\alpha(\sigma)=0.
$$

6. 水素原子内の電子にはスピン軌道相互作用がはたらき、その相互作用エネルギー演算子は $\zeta(\boldsymbol l\cdot\boldsymbol s)$（$\zeta>0$）と表される。この相互作用によって $2p$ 軌道の縮退した6つの準位は2つのエネルギー準位に分裂する。各準位の縮退度とスピン軌道相互作用エネルギーを求めよ。
7. 全角運動量 $\boldsymbol j=\boldsymbol l+\boldsymbol s$ について、$\boldsymbol j^2=\boldsymbol l^2+\boldsymbol s^2+2(\boldsymbol l\cdot\boldsymbol s)$ を用い、問6の各エネルギー準位における $\langle\boldsymbol j^2\rangle$ を求めよ。

### 题目描述

考试日期：2017年8月30日。

可以使用 $\hbar=h/(2\pi)$。

**[III-A]** 质量为 $m$ 的粒子被限制在一维无限深势阱中：$0\le x\le L$ 时 $V(x)=0$，区间外 $V(x)=\infty$。

1. 写出粒子在阱内满足的定态薛定谔方程，能量记为 $E$。
2. 写出波函数 $\psi(x)$ 的全部边界条件。
3. 设阱内 $\psi(x)=A\sin kx+B\cos kx$，其中 $A,B$ 为实数。利用边界条件和归一化求 $A,B,k$；若用整数 $n$ 表示 $k$，须注明 $n$ 的范围。
4. 求相应的能量本征值。
5. 在 $-L\le x\le2L$ 上画出 $n=2$ 时的概率密度 $|\psi(x)|^2$。
6. 对 $n=1$ 的 $\psi(x)$，分别求位置 $x$ 的期望值 $\langle x\rangle$、$x^2$ 的期望值 $\langle x^2\rangle$、动量 $p$ 的期望值 $\langle p\rangle$、$p^2$ 的期望值 $\langle p^2\rangle$。可参考以下不定积分公式：

$$
\int x\sin^2x\,dx=\frac{x^2}{4}-\frac{x}{4}\sin2x-\frac18\cos2x+C,
$$

$$
\int x^2\sin^2x\,dx=\frac{x^3}{6}-\frac{2x^2-1}{8}\sin2x-\frac{x}{4}\cos2x+C.
$$
7. 按 $\Delta Y=\sqrt{\langle Y^2\rangle-\langle Y\rangle^2}$ 计算 $\Delta x\,\Delta p$。

**[III-B]** 氢原子的定态波函数写成 $R_{nl}(r)Y_l^m(\theta,\phi)$。质子固定在原点，电子位置用球坐标表示，轨道角动量算符 $\boldsymbol l$ 的 $x,y,z$ 分量分别记为 $l_x,l_y,l_z$，取 $z$ 轴为量子化轴。轨道角动量升降算符为 $l_\pm=l_x\pm il_y$，作用规则为

$$
l_\pm Y_l^m=\hbar\sqrt{(l\mp m)(l\pm m+1)}Y_l^{m\pm1},
\qquad l_zY_l^m=m\hbar Y_l^m.
$$

1. 写出量子数 $n,l,m$ 的名称。
2. 用 $l_+,l_-$ 表示 $l_x^2+l_y^2$。
3. 计算 $\boldsymbol l^2Y_l^m$。

电子具有自旋角动量，自由度为2，两个本征函数记为 $\alpha,\beta$。自旋角动量算符 $\boldsymbol s$ 的 $x,y,z$ 分量分别记为 $s_x,s_y,s_z$。以 $z$ 轴为量子化轴，定义 $s_\pm=s_x\pm is_y$，有

$$
\begin{aligned}
s_+\alpha&=0,&s_+\beta&=\hbar\alpha,\\
s_-\alpha&=\hbar\beta,&s_-\beta&=0,\\
s_z\alpha&=\frac{\hbar}{2}\alpha,&s_z\beta&=-\frac{\hbar}{2}\beta,\\
\boldsymbol s^2\alpha&=\frac34\hbar^2\alpha,&
\boldsymbol s^2\beta&=\frac34\hbar^2\beta.
\end{aligned}
$$

考虑同时涉及轨道角动量与自旋角动量的算符 $\boldsymbol l\cdot\boldsymbol s$。将 $2p$ 轨道的3个本征函数 $R_{21}(r)Y_1^1(\theta,\phi)$、$R_{21}(r)Y_1^0(\theta,\phi)$、$R_{21}(r)Y_1^{-1}(\theta,\phi)$ 分别简记为 $u_1,u_0,u_{-1}$，并计入自旋，考虑 $u_1\alpha,u_0\alpha,u_{-1}\alpha,u_1\beta,u_0\beta,u_{-1}\beta$ 这6个函数。

4. 利用 $\boldsymbol l\cdot\boldsymbol s=\frac12(l_+s_-+l_-s_+)+l_zs_z$，求它作用于 $u_{-1}\alpha,u_1\beta,u_0\beta,u_{-1}\beta$ 的结果，依次填入ア〜エ。题目给出的完整填空式为

$$
\begin{aligned}
(\boldsymbol l\cdot\boldsymbol s)u_1\alpha
&=l_zs_zu_1\alpha=\frac12\hbar^2u_1\alpha,\\
(\boldsymbol l\cdot\boldsymbol s)u_0\alpha
&=\frac12l_+s_-u_0\alpha=\frac1{\sqrt2}\hbar^2u_1\beta,\\
(\boldsymbol l\cdot\boldsymbol s)u_{-1}\alpha&=\boxed{\text{ア}},\\
(\boldsymbol l\cdot\boldsymbol s)u_1\beta&=\boxed{\text{イ}},\\
(\boldsymbol l\cdot\boldsymbol s)u_0\beta&=\boxed{\text{ウ}},\\
(\boldsymbol l\cdot\boldsymbol s)u_{-1}\beta&=\boxed{\text{エ}}.
\end{aligned}
$$
5. 按 $u_1\alpha,u_0\alpha,u_1\beta,u_0\beta,u_{-1}\alpha,u_{-1}\beta$ 的顺序选取基底，为对角化 $\boldsymbol l\cdot\boldsymbol s$ 的 $6\times6$ 矩阵，先求 $u_0\alpha,u_1\beta$ 对应的 $2\times2$ 子矩阵的两个本征值。可使用下列正交归一关系；$\delta$ 为克罗内克符号，$\sigma$ 为自旋坐标，$*$ 表示复共轭。

$$
\int_0^\infty R_{nl}^*(r)R_{n'l}(r)r^2\,dr=\delta_{nn'},
$$

$$
\int_0^{2\pi}\int_0^\pi Y_l^{m*}(\theta,\phi)Y_{l'}^{m'}(\theta,\phi)\sin\theta\,d\theta\,d\phi
=\delta_{ll'}\delta_{mm'},
$$

$$
\sum_{\sigma=\pm\hbar/2}\alpha^*(\sigma)\alpha(\sigma)
=\sum_{\sigma=\pm\hbar/2}\beta^*(\sigma)\beta(\sigma)=1,
$$

$$
\sum_{\sigma=\pm\hbar/2}\alpha^*(\sigma)\beta(\sigma)
=\sum_{\sigma=\pm\hbar/2}\beta^*(\sigma)\alpha(\sigma)=0.
$$

6. 自旋轨道相互作用能量算符为 $\zeta(\boldsymbol l\cdot\boldsymbol s)$，其中 $\zeta>0$。求 $2p$ 的6个态分裂后两个能级各自的简并度与相互作用能量。
7. 利用 $\boldsymbol j=\boldsymbol l+\boldsymbol s$ 和 $\boldsymbol j^2=\boldsymbol l^2+\boldsymbol s^2+2\boldsymbol l\cdot\boldsymbol s$，求上述两个能级的 $\langle\boldsymbol j^2\rangle$。

## **Kai**

### [III-A]

#### 問1

井戸の内部では $V(x)=0$ なので、

$$
\boxed{-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}=E\psi(x)}
\qquad (0<x<L).
$$

#### 問2

無限に高い壁の外側では $\psi(x)=0$ であり、波動関数の連続性から

$$
\boxed{\psi(0)=\psi(L)=0.}
$$

無限大のポテンシャルの境界では、$\psi'$ の連続性は要求しない。

#### 問3

$\psi(0)=0$ より $B=0$。非自明な解には $A\ne0$ が必要なので、$\psi(L)=A\sin kL=0$ より $kL=n\pi$ となる。$n=0$ は恒等的に零の波動関数を与え、負の $n$ は全体の符号を変えるだけなので、$n=1,2,\ldots$ と選べる。

規格化条件から

$$
1=A^2\int_0^L\sin^2\frac{n\pi x}{L}\,dx=A^2\frac L2.
$$

したがって

$$
\boxed{A=\pm\sqrt{\frac2L},\qquad B=0,\qquad
k=\frac{n\pi}{L}\quad(n=1,2,\ldots).}
$$

以下では全体の符号を正に選び、

$$
\psi_n(x)=\begin{cases}
\displaystyle\sqrt{\frac2L}\sin\frac{n\pi x}{L}&(0\le x\le L),\\
0&(x<0,\ x>L)
\end{cases}
$$

とする。

#### 問4

$\psi_n''=-(n\pi/L)^2\psi_n$ を問1の方程式に代入すると、

$$
\boxed{E_n=\frac{n^2\pi^2\hbar^2}{2mL^2}
\quad(n=1,2,\ldots).}
$$

#### 問5

$$
\boxed{|\psi_2(x)|^2=\begin{cases}
\displaystyle\frac2L\sin^2\frac{2\pi x}{L}&(0\le x\le L),\\
0&(-L\le x<0,\ L<x\le2L).
\end{cases}}
$$

$x=0,L/2,L$ で零となり、$x=L/4,3L/4$ で最大値 $2/L$ をとる。井戸の外では零である。

![n=2 の確率密度。横軸は x/L、縦軸は L|ψ₂(x)|²。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/science/phys/2018/phys_201708_III_A_density.svg)

#### 問6

$\psi_1(x)=\sqrt{2/L}\sin(\pi x/L)$ は実関数なので、

$$
\begin{aligned}
\langle x\rangle
&=\frac2L\int_0^Lx\sin^2\frac{\pi x}{L}\,dx
=\boxed{\frac L2},\\
\langle x^2\rangle
&=\frac2L\int_0^Lx^2\sin^2\frac{\pi x}{L}\,dx
=\boxed{L^2\left(\frac13-\frac{1}{2\pi^2}\right)}.
\end{aligned}
$$

運動量演算子 $p=-i\hbar\,d/dx$ を用いると、

$$
\langle p\rangle
=-i\hbar\int_0^L\psi_1\psi_1'\,dx
=-\frac{i\hbar}{2}[\psi_1(x)^2]_0^L
=\boxed{0}.
$$

また、$p^2\psi_1=-\hbar^2\psi_1''=(\pi^2\hbar^2/L^2)\psi_1$ より、

$$
\boxed{\langle p^2\rangle=\frac{\pi^2\hbar^2}{L^2}.}
$$

#### 問7

$$
\Delta x
=L\sqrt{\frac1{12}-\frac{1}{2\pi^2}},
\qquad
\Delta p=\frac{\pi\hbar}{L}.
$$

したがって

$$
\boxed{\Delta x\,\Delta p
=\hbar\sqrt{\frac{\pi^2}{12}-\frac12}
\simeq0.56786\hbar>\frac\hbar2.}
$$

### [III-B]

#### 問1

$n$ は**主量子数**、$l$ は**方位量子数（軌道角運動量量子数）**、$m$ は**磁気量子数**である。

#### 問2

積を展開して加えると、交差項が打ち消し合い、

$$
l_+l_-+l_-l_+=2(l_x^2+l_y^2).
$$

よって

$$
\boxed{l_x^2+l_y^2=\frac12(l_+l_-+l_-l_+).}
$$

#### 問3

与えられた昇降演算子の関係から、

$$
\begin{aligned}
l_+l_-Y_l^m&=\hbar^2(l+m)(l-m+1)Y_l^m,\\
l_-l_+Y_l^m&=\hbar^2(l-m)(l+m+1)Y_l^m,\\
l_z^2Y_l^m&=m^2\hbar^2Y_l^m.
\end{aligned}
$$

したがって

$$
\begin{aligned}
&\boldsymbol l^2Y_l^m\\
&=\hbar^2\left\{
\frac{(l+m)(l-m+1)+(l-m)(l+m+1)}2+m^2
\right\}Y_l^m\\
&=\boxed{\hbar^2l(l+1)Y_l^m}.
\end{aligned}
$$

#### 問4

$l=1$ なので、隣接する $u_m$ の間の昇降演算子の係数は $\sqrt2\hbar$ である。軌道とスピンにそれぞれ演算子を作用させると、

$$
\begin{aligned}
(\boldsymbol l\cdot\boldsymbol s)u_{-1}\alpha
&=\frac12l_+s_-u_{-1}\alpha+l_zs_zu_{-1}\alpha\\
&=\boxed{\frac{\hbar^2}{\sqrt2}u_0\beta
-\frac{\hbar^2}{2}u_{-1}\alpha}\quad(\text{ア}),\\[2mm]
(\boldsymbol l\cdot\boldsymbol s)u_1\beta
&=\frac12l_-s_+u_1\beta+l_zs_zu_1\beta\\
&=\boxed{\frac{\hbar^2}{\sqrt2}u_0\alpha
-\frac{\hbar^2}{2}u_1\beta}\quad(\text{イ}),\\[2mm]
(\boldsymbol l\cdot\boldsymbol s)u_0\beta
&=\frac12l_-s_+u_0\beta
=\boxed{\frac{\hbar^2}{\sqrt2}u_{-1}\alpha}\quad(\text{ウ}),\\[2mm]
(\boldsymbol l\cdot\boldsymbol s)u_{-1}\beta
&=l_zs_zu_{-1}\beta
=\boxed{\frac{\hbar^2}{2}u_{-1}\beta}\quad(\text{エ}).
\end{aligned}
$$

#### 問5

基底 $(u_0\alpha,u_1\beta)$ における部分行列は

$$
M=\hbar^2\begin{pmatrix}
0&1/\sqrt2\\
1/\sqrt2&-1/2
\end{pmatrix}.
$$

固有値を $\lambda$ とすると、

$$
\det(M-\lambda I)
=\lambda\left(\lambda+\frac{\hbar^2}{2}\right)
-\frac{\hbar^4}{2}
=\left(\lambda-\frac{\hbar^2}{2}\right)(\lambda+\hbar^2)=0.
$$

よって2つの固有値は

$$
\boxed{\lambda=\frac{\hbar^2}{2},\quad-\hbar^2.}
$$

#### 問6

指定された6つの基底の順では、全行列は

$$
\boldsymbol l\cdot\boldsymbol s
\quad\longleftrightarrow\quad
\hbar^2\begin{pmatrix}
\frac12&0&0&0&0&0\\
0&0&\frac1{\sqrt2}&0&0&0\\
0&\frac1{\sqrt2}&-\frac12&0&0&0\\
0&0&0&0&\frac1{\sqrt2}&0\\
0&0&0&\frac1{\sqrt2}&-\frac12&0\\
0&0&0&0&0&\frac12
\end{pmatrix}.
$$

問5と同じ $2\times2$ ブロックが2つあり、さらに $u_1\alpha,u_{-1}\beta$ はいずれも固有値 $\hbar^2/2$ をもつ。したがって、相互作用エネルギーと縮退度は

$$
\boxed{
\begin{array}{c|c}
\text{相互作用エネルギー}&\text{縮退度}\\\hline
-\zeta\hbar^2&2\\
\zeta\hbar^2/2&4
\end{array}}
$$

となる。相互作用を含む全エネルギーは、それぞれ共通の非摂動エネルギー $E_{2p}$ を加えた値である。

#### 問7

$2p$ 状態では $l=1$、電子のスピン量子数は $s=1/2$ なので、

$$
\langle\boldsymbol j^2\rangle
=2\hbar^2+\frac34\hbar^2
+2\langle\boldsymbol l\cdot\boldsymbol s\rangle.
$$

よって

$$
\boxed{
\begin{aligned}
E_{\mathrm{so}}=-\zeta\hbar^2:\quad
\langle\boldsymbol j^2\rangle&=\frac34\hbar^2
&&\left(j=\frac12\right),\\
E_{\mathrm{so}}=\frac{\zeta\hbar^2}{2}:\quad
\langle\boldsymbol j^2\rangle&=\frac{15}{4}\hbar^2
&&\left(j=\frac32\right).
\end{aligned}}
$$

## **Reference**

- [九州大学公式：平成30年度大学院修士課程入学試験問題（2017年8月30日実施、PDF pp. 13–16）](https://www.phys.kyushu-u.ac.jp/graduate/pdf/h30_inshi.pdf#page=13)
- [ばたぱら：九大・理学府・物理学専攻（平成30年度）過去問解答、3.2 角運動量](https://batapara.com/archives/kakomon-9d-h30.html/)
- [ばたぱら：1次元井戸型ポテンシャル（無限大）と不確定性関係](https://batapara.com/archives/infinite-potential-well.html/)
