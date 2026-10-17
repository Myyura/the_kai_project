---
sidebar_label: "2021年8月実施 専門科目 第2問"
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Bose-Einstein-Condensation
---

# 東京大学 理学系研究科 物理学専攻 2021年8月実施 専門科目 第2問

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%AD%A6%E7%B3%BB%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%89%A9%E7%90%86%E5%AD%A6%E5%B0%82%E6%94%BB/2022%E5%B9%B4%E5%BA%A6_%E5%B0%82%E9%96%80%E7%A7%91%E7%9B%AE_2.html) refined with GPT 6 Astra)

## **Description**

体積 $V=L^3$ の相互作用が無視できる理想ボース気体を考える。ボース粒子の質量は $m$、粒子数は $N$ とする。以下の設問に答えよ。なお、必要であれば、プランク定数を $2\pi$ で割った量 $\hbar$ を用いてもよい。

まず、スピンが0のボース粒子を考える。

1. 全ての一粒子固有エネルギーとそれに対応する固有波動関数 $\Psi(x,y,z)$ を求めよ。ただし、$\Psi(x,y,z)$ は周期境界条件

$$
\begin{aligned}
\Psi(x+L,y,z)&=\Psi(x,y,z),\\
\Psi(x,y+L,z)&=\Psi(x,y,z),\\
\Psi(x,y,z+L)&=\Psi(x,y,z)
\end{aligned}
$$

を満たすとする。さらに、基底状態のエネルギーは $E=0$ であるとする。

2. 固有エネルギー $E_i$ をもつ一粒子固有状態 $i$ の大分配関数は、温度 $T$、化学ポテンシャル $\mu$（$\mu\leq0$）、ボルツマン定数 $k_B$ を用いて

$$
\Xi_i=\sum_{n_i=0}^\infty\exp\left[-\frac{(E_i-\mu)n_i}{k_BT}\right]
$$

で与えられる。このとき、状態 $i$ に存在する粒子数の統計力学的平均値（ボース分布関数）$f(E_i,\mu)$ を求めよ。導出の過程も示すこと。

以下では、$L$ が十分大きく、エネルギー準位が連続とみなせるとする。

3. エネルギーが0から $E$ の範囲にある一粒子固有状態の数を $\Omega(E)$ とすると、状態密度は $D(E)=d\Omega(E)/dE$ で与えられる。$D(E)$ を求めよ。

4. ある温度 $T=T_c$ より高温では、設問2と3の結果を用いて、全粒子数 $N$ は

$$
N=\int_0^\infty f(E,\mu)D(E)\,dE \tag{1}
$$

と表される。式 (1) の右辺は、温度一定のもとで、$\mu$（$\mu\leq0$）の単調増加関数である。$\mu=0$ のときの積分を評価せよ。なお、

$$
\frac2{\sqrt\pi}\int_0^\infty\frac{\sqrt x}{e^x-1}\,dx
=\sum_{n=1}^\infty\frac1{n^{3/2}}=\zeta\left(\frac32\right)
$$

を用いてもよい。ここで、$\zeta(x)$ はリーマンのゼータ関数である。

5. $T<T_c$ では、マクロな数の粒子がエネルギー最低の一粒子固有状態をとり、全粒子数 $N$ は、エネルギー最低の一粒子状態（$E=0$）にある粒子数 $N_0$ とそれ以外の状態にある粒子数の和として以下のように表される。

$$
N=N_0+\int_0^\infty f(E,\mu=0)D(E)\,dE.
$$

この現象をボース・アインシュタイン凝縮と呼ぶ。転移温度 $T_c$ を求めよ。

6. $T<T_c$ における $N_0$ を $N,T,T_c$ を用いて表せ。

7. $T<T_c$ における定積熱容量 $C_V=(\partial E/\partial T)_{N,V}$ は定数 $a$ を用いて $C_V=aT^\gamma$ と表される。$\gamma$ の値を求めよ。

次に、ボース粒子がスピン $S$ をもつ場合を考える。

8. 外部磁場がない場合の状態密度 $D(E)$ とボース・アインシュタイン凝縮の転移温度 $T'_c$ を求めよ。

9. 磁束密度の大きさが $B$ の外部磁場を $z$ 方向にかけると、ゼーマンエネルギーによりスピン自由度の縮退が解ける。ゼーマンエネルギーは $c$ をある正の定数として $-cm_zB$（$m_z$ はスピン磁気量子数 $-S,-S+1,\ldots,S$）と書けるとする。ボース・アインシュタイン凝縮の転移温度 $T'_c$ を決める方程式を書き下せ。

10. 転移温度 $T'_c$ の $B$ 依存性の概略を図示し、その $cB\gg k_BT'_c$ における振る舞いを述べよ。なお、

$$
\frac2{\sqrt\pi}\int_0^\infty\sqrt x e^{-x}\,dx=1
$$

を用いてもよい。

#### 题目描述

考虑体积 $V=L^3$、粒子间相互作用可以忽略的理想玻色气体。玻色子的质量为 $m$，粒子数为 $N$。回答以下问题。必要时可使用普朗克常数除以 $2\pi$ 所得的量 $\hbar$。

首先考虑自旋为0的玻色子。

1. 求所有单粒子本征能量及其对应的本征波函数 $\Psi(x,y,z)$。设 $\Psi(x,y,z)$ 满足周期边界条件

$$
\begin{aligned}
\Psi(x+L,y,z)&=\Psi(x,y,z),\\
\Psi(x,y+L,z)&=\Psi(x,y,z),\\
\Psi(x,y,z+L)&=\Psi(x,y,z),
\end{aligned}
$$

并设基态能量为 $E=0$。

2. 本征能量为 $E_i$ 的单粒子本征态 $i$ 的大配分函数可用温度 $T$、化学势 $\mu$（$\mu\leq0$）及玻尔兹曼常数 $k_B$ 表示为

$$
\Xi_i=\sum_{n_i=0}^\infty\exp\left[-\frac{(E_i-\mu)n_i}{k_BT}\right].
$$

求处于状态 $i$ 的粒子数的统计力学平均值（玻色分布函数）$f(E_i,\mu)$，并写出推导过程。

以下设 $L$ 足够大，可以将能级视为连续。

3. 设能量在0至 $E$ 范围内的单粒子本征态数为 $\Omega(E)$，则态密度为 $D(E)=d\Omega(E)/dE$。求 $D(E)$。

4. 在高于某个温度 $T=T_c$ 的温度下，利用第2、3问的结果，总粒子数 $N$ 可以表示为

$$
N=\int_0^\infty f(E,\mu)D(E)\,dE. \tag{1}
$$

在温度一定时，式 (1) 右边是 $\mu$（$\mu\leq0$）的单调增函数。计算 $\mu=0$ 时的积分。可以使用

$$
\frac2{\sqrt\pi}\int_0^\infty\frac{\sqrt x}{e^x-1}\,dx
=\sum_{n=1}^\infty\frac1{n^{3/2}}=\zeta\left(\frac32\right),
$$

其中 $\zeta(x)$ 为黎曼 zeta 函数。

5. 在 $T<T_c$ 时，宏观数量的粒子占据能量最低的单粒子本征态。总粒子数 $N$ 是能量最低的单粒子态（$E=0$）中的粒子数 $N_0$ 与其余状态中粒子数之和，可表示为

$$
N=N_0+\int_0^\infty f(E,\mu=0)D(E)\,dE.
$$

这一现象称为玻色–爱因斯坦凝聚。求转变温度 $T_c$。

6. 用 $N,T,T_c$ 表示 $T<T_c$ 时的 $N_0$。

7. $T<T_c$ 时的定容热容量 $C_V=(\partial E/\partial T)_{N,V}$ 可用常数 $a$ 表示为 $C_V=aT^\gamma$。求 $\gamma$。

接着考虑玻色子具有自旋 $S$ 的情况。

8. 求无外磁场时的态密度 $D(E)$ 及玻色–爱因斯坦凝聚的转变温度 $T'_c$。

9. 沿 $z$ 方向施加磁感应强度大小为 $B$ 的外磁场后，塞曼能使自旋自由度的简并解除。设塞曼能可表示为 $-cm_zB$，其中 $c$ 为某个正常数，$m_z$ 是自旋磁量子数，取值为 $-S,-S+1,\ldots,S$。写出确定玻色–爱因斯坦凝聚转变温度 $T'_c$ 的方程。

10. 画出转变温度 $T'_c$ 随 $B$ 变化的概略图，并说明 $cB\gg k_BT'_c$ 时的行为。可以使用

$$
\frac2{\sqrt\pi}\int_0^\infty\sqrt x e^{-x}\,dx=1.
$$

## **Kai**

### (1)

自由粒子の平面波に周期境界条件を課すと、各波数は $2\pi/L$ の整数倍になる。したがって、$n_x,n_y,n_z\in\mathbb Z$ に対して

$$
\boxed{\Psi_{\boldsymbol n}(\boldsymbol r)=L^{-3/2}\exp\left[\frac{2\pi i}{L}(n_xx+n_yy+n_zz)\right]},
$$

$$
\boxed{E_{\boldsymbol n}=\frac{2\pi^2\hbar^2}{mL^2}(n_x^2+n_y^2+n_z^2)}.
$$

基底状態は $\boldsymbol n=0$、エネルギー0である。

### (2)

$E_i-\mu>0$ に対して等比級数を足すと

$$
\Xi_i=\frac1{1-e^{-\beta(E_i-\mu)}},\qquad\beta=\frac1{k_BT}.
$$

よって

$$
\boxed{f(E_i,\mu)=\frac1\beta\frac{\partial\ln\Xi_i}{\partial\mu}
=\frac1{e^{\beta(E_i-\mu)}-1}}.
$$

$E_i=0,\mu=0$ の基底状態はこの式の発散する極限であり、凝縮相では $N_0$ として別に扱う。

### (3)

波数空間で一状態が占める体積は $(2\pi/L)^3$。半径 $k=\sqrt{2mE}/\hbar$ の球内の状態を数えると

$$
\Omega(E)=\frac{V}{(2\pi)^3}\frac{4\pi}{3}\left(\frac{2mE}{\hbar^2}\right)^{3/2}.
$$

したがって

$$
\boxed{D_0(E)=\frac{V}{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}\sqrt E}.
$$

以下ではスピン0の状態密度を $D_0$ と書く。

### (4)

熱的波長を $\lambda_T=\sqrt{2\pi\hbar^2/(mk_BT)}$ とする。$x=E/(k_BT)$ と置き、与えられた積分を用いると

$$
\boxed{\int_0^\infty\frac{D_0(E)}{e^{E/(k_BT)}-1}\,dE
=\frac{V}{\lambda_T^3}\zeta(3/2)}.
$$

### (5)

転移点では $N_0=0$ となり、励起状態が粒子を収容できる上限が $N$ に等しい。よって

$$
N=V\left(\frac{mk_BT_c}{2\pi\hbar^2}\right)^{3/2}\zeta(3/2),
$$

$$
\boxed{T_c=\frac{2\pi\hbar^2}{mk_B}\left[\frac{N}{V\zeta(3/2)}\right]^{2/3}}.
$$

### (6)

励起粒子数が $T^{3/2}$ に比例するため

$$
\boxed{N_0=N\left[1-\left(\frac T{T_c}\right)^{3/2}\right]}\qquad(T<T_c).
$$

### (7)

基底状態のエネルギーは0なので、全内部エネルギーは

$$
E=\int_0^\infty\frac{\varepsilon D_0(\varepsilon)}{e^{\varepsilon/(k_BT)}-1}\,d\varepsilon
\propto T^{5/2}.
$$

よって $C_V\propto T^{3/2}$、すなわち

$$
\boxed{\gamma=\frac32}.
$$

具体的には $C_V=(15/4)Nk_B\{\zeta(5/2)/\zeta(3/2)\}(T/T_c)^{3/2}$ である。

### (8)

各運動量状態のスピン縮退度は $g=2S+1$ なので

$$
\boxed{D(E)=gD_0(E),\qquad T'_c(0)=\frac{T_c}{g^{2/3}}}.
$$

### (9)

$B\geq0$ とする。最低エネルギーは $-cSB$ であり、転移点の化学ポテンシャルはこの値に等しい。運動エネルギーを $\varepsilon\geq0$、$r=S-m_z=0,1,\ldots,2S$ とおくと、最低準位からの励起エネルギーは $\varepsilon+rcB$。したがって

$$
\boxed{N=\sum_{r=0}^{2S}\int_0^\infty
\frac{D_0(\varepsilon)}{\exp[(\varepsilon+rcB)/(k_BT'_c)]-1}\,d\varepsilon}.
$$

$g_{3/2}(z)=\sum_{\ell=1}^\infty z^\ell/\ell^{3/2}$ を用いれば

$$
\boxed{N=V\left(\frac{mk_BT'_c}{2\pi\hbar^2}\right)^{3/2}
\sum_{r=0}^{2S}g_{3/2}\left(e^{-rcB/(k_BT'_c)}\right)}.
$$

### (10)

一定温度では $r\geq1$ の各項が $B$ とともに減少するため、粒子数を一定に保つ転移温度は単調増加する。$S>0$ では $T_c/(2S+1)^{2/3}$ から出発し、$B\to\infty$ で $T_c$ に下から近づく。$S=0$ なら磁場に依存せず $T'_c=T_c$ である。

![転移温度の磁場依存性（S=1の例）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/tokyo-university/science/phys/2022/phys_202108_2_critical.svg)

図は $S=1$ の例を示す。一般の $S>0$ でも増加して飽和する形は同じである。強磁場では $r\geq1$ の状態が熱的に凍結し、最低ゼーマン枝だけが残る。$g_{3/2}(e^{-b})=e^{-b}+O(e^{-2b})$ より、$S>0$ の場合

$$
\begin{aligned}
N=\frac{V}{\lambda_{T'_c}^3}\Bigl[&\zeta(3/2)+e^{-cB/(k_BT'_c)}\\
&+O\left(e^{-2cB/(k_BT'_c)}\right)\Bigr].
\end{aligned}
$$

したがって主要な補正は

$$
\boxed{\frac{T'_c}{T_c}=1-\frac{2}{3\zeta(3/2)}e^{-cB/(k_BT_c)}
+o\left(e^{-cB/(k_BT_c)}\right)}.
$$

## **Reference**

- [東京大学公式問題（PDF 6–7ページ）](https://www.phys.s.u-tokyo.ac.jp/wp-content/uploads/2022/04/R4master.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%AD%A6%E7%B3%BB%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%89%A9%E7%90%86%E5%AD%A6%E5%B0%82%E6%94%BB/2022%E5%B9%B4%E5%BA%A6_%E5%B0%82%E9%96%80%E7%A7%91%E7%9B%AE_2.html)
