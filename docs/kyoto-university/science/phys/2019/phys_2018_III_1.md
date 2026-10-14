---
sidebar_label: "2019年度 III-1（力学）"
tags:
  - Kyoto-University
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Monatomic-and-Diatomic-Lattice-Vibrations
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2019年度 問題III-1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

自然長 $a$、ばね定数 $k$ のばねで質点を一直線につなぐ。まず両端固定、全長 $4a$ の鎖の3質点を考え、左から位置を $a+x_1,2a+x_2,3a+x_3$、質量を $m,M,m$ とする。$\omega_0=\sqrt{2k/m}$、$\beta=m/M$ とおく。

1. 両外側の質点を $x_1=x_3=0$ に固定したとき、初期条件 $x_2(0)=X,\dot x_2(0)=V$ に対する運動を求めよ。
2. 全質点を自由に動かした運動方程式を求め、$x_j=A_j\cos\omega t$ として、小さい順の基準角振動数 $\omega_s,\omega_c,\omega_l$ の二乗を求めよ。
3. $\beta=1$ で各モードの $A_2,A_3$ を $A_1$ で表せ。
4. $0\leq\beta\leq2$ で $\omega_s^2/\omega_0^2,\omega_c^2/\omega_0^2,\omega_l^2/\omega_0^2$ を図示し、$\beta=0,1$ の値を示せ。

次に十分多数の質点を同じばねで一直線につなぎ、中央の $n=0$ のみ質量 $M$、残りは $m$ とする。平衡位置は $na$、変位を $x_n$ とする。

5. 中央を角振動数 $\omega$ で強制振動させる。$x_n=\operatorname{Re}[B_ne^{i\omega t}]$、$B_n=B_0b^n$ を質量 $m$ の運動方程式へ代入し、$b$ と $|b|\neq1$ となる条件を求めよ。$|b|=1$ は進行波、$|b|<1$ は局在波に対応する。
6. 強制力を止める。$M<m$ では局在した基準振動が存在する。左右で $|n|$ とともに減衰する解を選び、$x_{-1},x_{+1}$ を $x_0,b$ で表せ。中央の運動方程式からその角振動数を求め、$m\to\infty$ の極限も求めよ。

#### 题目描述

三质点以四根相同弹簧连接两固定端，弹簧自然长 $a$、劲度 $k$，质量为 $m,M,m$，平衡位置为 $a,2a,3a$。定义 $\omega_0=\sqrt{2k/m},\beta=m/M$。

1. 固定两侧质点，求中央质点给定初位移和初速度下的运动。
2. 放开三质点，求方程及三个本征频率。
3. 等质量时求三个本征振型。
4. 绘制频率平方随质量比的曲线。
5. 对仅中央质量不同的无限长弹簧链，以 $B_n=B_0b^n$ 求传播因子及非传播频率条件。
6. 放开中央质点，求 $M<m$ 时左右衰减的局域模频率及 $m\to\infty$ 极限。

## **Kai**

### (1)–(3)

(1) $M\ddot x_2=-2kx_2$。$\Omega=\sqrt{2k/M}$ とおけば

$$
\boxed{x_2=X\cos\Omega t+\frac V\Omega\sin\Omega t.}
$$

(2) 運動方程式は

$$
m\ddot x_1=k(x_2-2x_1),\quad M\ddot x_2=k(x_1-2x_2+x_3),\quad m\ddot x_3=k(x_2-2x_3).
$$

$z=\omega^2/\omega_0^2$ とすると固有方程式は $(z-1)[z^2-(1+\beta)z+\beta/2]=0$。したがって

$$
\boxed{\frac{\omega_s^2}{\omega_0^2}=\frac{1+\beta-\sqrt{1+\beta^2}}2,\quad
\frac{\omega_c^2}{\omega_0^2}=1,\quad
\frac{\omega_l^2}{\omega_0^2}=\frac{1+\beta+\sqrt{1+\beta^2}}2.}
$$

(3) $\beta=1$ では順に

$$
\boxed{(A_1,A_2,A_3)\propto(1,\sqrt2,1),\ (1,0,-1),\ (1,-\sqrt2,1).}
$$

### (4)

![質量比と三つの基準振動数](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto-physics-2015-2022/2019-chain-frequencies.svg)

$\beta=0$ で値は $(0,1,1)$、$\beta=1$ で $(1-1/\sqrt2,1,1+1/\sqrt2)$。上下の枝は単調増加し、中間の枝は一定である。$\beta=0$ は $M\to\infty$ の極限を意味する。

### (5)

$n\neq0$ では $m\ddot x_n=k(x_{n-1}-2x_n+x_{n+1})$。$z=\omega^2/\omega_0^2$ とすると

$$
b+b^{-1}=2(1-z),\qquad
\boxed{b=1-z\pm\sqrt{(1-z)^2-1}.}
$$

実周波数では $0\leq z\leq2$ で $|b|=1$、$z>2$ で互いに逆数の負の実根を持つ。従って

$$
\boxed{|b|\neq1\ \Longleftrightarrow\ \omega^2>2\omega_0^2.}
$$

### (6)

$z>2$ では $b=1-z+\sqrt{(1-z)^2-1}$ が $-1<b<0$ を満たす。左右に減衰させるには $B_n=B_0b^{|n|}$ とすればよく、$x_{-1}=x_{+1}=bx_0$。中央の式から $z=\beta(1-b)$。これと (5) を連立すると

$$
\boxed{b=-\frac1{2\beta-1},\qquad
\omega^2=\frac{2\beta^2}{2\beta-1}\omega_0^2.}
$$

局在条件 $|b|<1$ は $\beta>1$、すなわち $M<m$ と一致する。$M,k$ を固定して $m\to\infty$ とすると、周囲は動かなくなり

$$
\boxed{\omega\longrightarrow\sqrt{2k/M}.}
$$

## **Reference**

- [京都大学公式原題（2019年度、PDF 16–17ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/H31.pdf)
