---
sidebar_label: "2022年度 専門科目 第2問"
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Bose-Einstein-Condensation
---

# 東京大学 理学系研究科 物理学専攻 2022年度 専門科目 第2問

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%AD%A6%E7%B3%BB%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%89%A9%E7%90%86%E5%AD%A6%E5%B0%82%E6%94%BB/2022%E5%B9%B4%E5%BA%A6_%E5%B0%82%E9%96%80%E7%A7%91%E7%9B%AE_2.html) refined with GPT 6 Astra)

## **Description**

体積 $V=L^3$ の相互作用が無視できる理想ボース気体を考える。粒子の質量は $m$、粒子数は $N$、プランク定数を $2\pi$ で割った量は $\hbar$ とする。まずスピン0の場合について答えよ。

1. 全ての一粒子固有エネルギーと対応する固有波動関数 $\Psi(x,y,z)$ を求めよ。周期境界条件

$$
\Psi(x+L,y,z)=\Psi(x,y,z),\quad
\Psi(x,y+L,z)=\Psi(x,y,z),\quad
\Psi(x,y,z+L)=\Psi(x,y,z)
$$

を課し、基底状態のエネルギーを0とする。

2. エネルギー $E_i$ の一粒子状態の大分配関数は、温度 $T$、化学ポテンシャル $\mu\leq0$、ボルツマン定数 $k_B$ を用いて

$$
\Xi_i=\sum_{n_i=0}^\infty\exp\left[-\frac{(E_i-\mu)n_i}{k_BT}\right]
$$

と与えられる。この状態の平均粒子数 $f(E_i,\mu)$（ボース分布関数）を導け。

以下では $L$ が十分大きく、エネルギー準位が連続とみなせるとする。

3. エネルギーが0から $E$ までの一粒子状態数を $\Omega(E)$ とする。状態密度 $D(E)=d\Omega(E)/dE$ を求めよ。
4. $T>T_c$ では $N=\int_0^\infty f(E,\mu)D(E)\,dE$ と書ける。この右辺は一定温度で $\mu\leq0$ の単調増加関数である。$\mu=0$ のときの積分を評価せよ。必要なら次式を用いよ。

$$
\frac2{\sqrt\pi}\int_0^\infty\frac{\sqrt x}{e^x-1}\,dx
=\sum_{n=1}^\infty\frac1{n^{3/2}}=\zeta(3/2).
$$

5. $T<T_c$ では基底状態を占める粒子数 $N_0$ が巨視的になり、

$$
N=N_0+\int_0^\infty f(E,0)D(E)\,dE
$$

となる。このボース・アインシュタイン凝縮の転移温度 $T_c$ を求めよ。
6. $T<T_c$ で $N_0$ を $N,T,T_c$ によって表せ。
7. $T<T_c$ の定積熱容量は $C_V=(\partial E/\partial T)_{N,V}=aT^\gamma$ と書ける。指数 $\gamma$ を求めよ。

次に、スピン $S$ をもつボース粒子を考える。

8. 外部磁場がない場合の状態密度 $D(E)$ と転移温度 $T'_c$ を求めよ。
9. $z$ 方向に磁束密度 $B$ の外部磁場を加えると、ゼーマンエネルギー $-cm_zB$ によりスピン縮退が解ける。$c>0$ は定数、$m_z=-S,-S+1,\ldots,S$ である。転移温度 $T'_c$ を決める方程式を書け。
10. $T'_c$ の $B$ 依存性の概略を図示し、$cB\gg k_BT'_c$ での振る舞いを述べよ。必要なら $(2/\sqrt\pi)\int_0^\infty\sqrt x e^{-x}dx=1$ を用いよ。

#### 题目描述

考虑体积 $L^3$、粒子质量 $m$、粒子数 $N$ 的无相互作用理想玻色气体。

对自旋0粒子：①在三方向周期边界下求单粒子能谱和归一化波函数；②由给定的大配分函数推导玻色分布；③在连续能谱近似下求态密度；④计算化学势为0时激发态能容纳的粒子数；⑤求凝聚临界温度；⑥求临界温度以下的基态粒子数；⑦求定容热容量的温度幂指数。

再考虑自旋 $S$：⑧求无磁场下的态密度和临界温度；⑨外加沿 $z$ 方向的磁场后，塞曼能为 $-cm_zB$，写出临界温度方程；⑩画出临界温度随磁场大小变化的概略图，并讨论强磁场极限。可使用题中给出的两个积分公式。

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

![転移温度の磁場依存性（S=1の例）](https://cdn.jsdelivr.net/gh/Myyura/the_kai_project_assets@main/kakomonn/tokyo_university/science/phys/2022/phys_202108_2_critical.svg)

図は $S=1$ の例を示す。一般の $S>0$ でも増加して飽和する形は同じである。強磁場では $r\geq1$ の状態が熱的に凍結し、最低ゼーマン枝だけが残る。$g_{3/2}(e^{-b})=e^{-b}+O(e^{-2b})$ より、$S>0$ の場合

$$
N=\frac{V}{\lambda_{T'_c}^3}\left[\zeta(3/2)+e^{-cB/(k_BT'_c)}+O\left(e^{-2cB/(k_BT'_c)}\right)\right].
$$

したがって主要な補正は

$$
\boxed{\frac{T'_c}{T_c}=1-\frac{2}{3\zeta(3/2)}e^{-cB/(k_BT_c)}
+o\left(e^{-cB/(k_BT_c)}\right)}.
$$

## **Reference**

- [東京大学公式問題（PDF 6–7ページ）](https://www.phys.s.u-tokyo.ac.jp/wp-content/uploads/2022/04/R4master.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E6%9D%B1%E4%BA%AC%E5%A4%A7%E5%AD%A6/%E7%90%86%E5%AD%A6%E7%B3%BB%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%89%A9%E7%90%86%E5%AD%A6%E5%B0%82%E6%94%BB/2022%E5%B9%B4%E5%BA%A6_%E5%B0%82%E9%96%80%E7%A7%91%E7%9B%AE_2.html)
