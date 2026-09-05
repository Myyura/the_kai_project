---
sidebar_label: '2019年8月実施 物理学 第2問'
tags:
  - Tokyo-University
  - Physics.Thermodynamics.Classical-Ideal-Gas-Partition-Function-and-Gibbs-Factor
  - Physics.Thermodynamics.Classical-Ideal-Gas-Entropy-and-Low-Temperature-Failure
  - Physics.Thermodynamics.Fermi-Dirac-Grand-Canonical-Distribution
  - Physics.Thermodynamics.High-Temperature-Fermi-Gas-Classical-Limit
  - Physics.Thermodynamics.Low-Temperature-Fermi-Gas-Heat-Capacity-and-Entropy
---

# 東京大学 理学系研究科 物理学専攻 2019年8月実施 物理学 第2問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

出典：[東京大学大学院理学系研究科物理学専攻](https://www.phys.s.u-tokyo.ac.jp/)の大学院入試問題（一部表記・構成を改変）。
### 第2問

体積 $V$、粒子数 $N$ の系が温度 $T$ の熱浴と接触している状況を考える。粒子の質量を $m$ とし、粒子間の相互作用は考えない。必要であれば、熱力学の関係式

$$
\begin{split}
& dU = d'Q - PdV + \mu dN, \\
& d'Q = TdS, \quad (\text{可逆過程の場合}) \\
& F = U - TS, 
\end{split}
\tag{1}
$$

を用いてよい。ここで、$U$ は系の内部エネルギー、$Q$ は熱量、$P$ は圧力、$\mu$ は化学ポテンシャル、$S$ はエントロピー、$F$ はヘルムホルツの自由エネルギーである。

まず粒子を古典的に扱う。この場合、分配関数は

$$
Z = \frac{1}{h^{3N}N!} \int \cdots \int dp_{1x}dp_{1y}dp_{1z} \cdots dp_{Nz}dx_1dy_1dz_1 \cdots dz_N e^{-\beta H} \tag{2}
$$

で、ハミルトニアン $H$ は

$$
H = \sum_{i=1}^N \frac{1}{2m} \left(p_{ix}^2 + p_{iy}^2 + p_{iz}^2\right) \tag{3}
$$

で与えられる。ここで $(p_{ix}, p_{iy}, p_{iz})$ は $i$ 番目の粒子の運動量、$(x_i, y_i, z_i)$ は $i$ 番目の粒子の位置座標、$h$ はプランク定数 $(h = 2\pi \hbar)$、$\beta = 1/(k_B T)$で、$k_B$ はボルツマン定数である。

1.&nbsp;式 (2) の積分を実行し、$Z(T, V, N)$を求めよ。さらに、得られた結果を用いて、この系の圧力 $P(T, V, N)$ を求めよ。必要であれば

$$
\begin{split}
& \int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\frac{\pi}{a}}, \quad (a > 0) \\
& \ln N! \approx N \ln N - N, \quad (N \text{ が十分大きい場合})
\end{split}
\tag{4}
$$

を用いてよい。

2.&nbsp;式 (2) には、$1/N!$ という因子がついている。もしこの因子が無かったとすると、ヘルムホルツの自由エネルギーが、ある熱力学的性質を満たさなくなる。このことを簡潔に説明せよ。

3.&nbsp;この系のエントロピー $S(T, V, N)$ を求めよ。$T \to 0$ としたときに、古典的には $S$ はどうなるか述べよ。

4.&nbsp;体積が一定のときの熱容量 $C_V(T, V, N)$ を求めよ。

以下では、粒子がフェルミ粒子であるとして、量子力学的に扱う。系は化学ポテンシャル $\mu$ の粒子浴に接しているとして、グランドカノニカル分布で考える。粒子の運動エネルギーを

$$
\varepsilon_k = \frac{\hbar^2}{2m} (k_x^2 + k_y^2 + k_z^2) \tag{5}
$$

と表す。ここで $\boldsymbol{k} = (k_x, k_y, k_z)$ は粒子の波数を表す。また、体積 $V$ は一辺の長さ $L$ の立方体とし $(V = L^3)$、周期境界条件が満たされるものとする。ただし、スピンなどの粒子の内部自由度は考えなくてよい。

5.&nbsp;この系の大分配関数 $\Xi(T, V, \mu)$ は

$$
\Xi(T, V, \mu) = \prod_k \left(1 + e^{-\beta (\varepsilon_k - \mu)}\right) \tag{6}
$$

である。この式で、波数 $\boldsymbol{k}$ が取り得る値を求めよ。

6.&nbsp;大分配関数を用いて、全粒子数の期待値 $\overline{N}$ が

$$
\overline{N} = \sum_k f(\varepsilon_k) \tag{7}
$$

となることを示せ。ここで $f(\varepsilon_k)$ はフェルミ分布関数

$$
f(\varepsilon_k) = \frac{1}{e^{\beta (\varepsilon_k - \mu)} + 1} \tag{8}
$$

である。

7.&nbsp;フェルミ粒子系の縮退温度より十分高い温度では、$\mu$ は負で絶対値の大きな値 $(|\mu| \gg k_B T)$ となる。この場合、フェルミ分布関数は

$$
f(\varepsilon_k) \approx e^{-\beta (\varepsilon_k - \mu)} \tag{9}
$$

と近似してよい。このような温度領域で、$L$ が十分大きいとして式 (7) の $\boldsymbol{k}$ の取り得る値についての和を積分の形に書き直して積分を実行し、$\mu$ を $T, V$ と $N$（簡単のために $\overline{N} = N$ と書いてよい）の関数として求めよ。

8.&nbsp;設問 7 と同様の温度領域におけるエントロピーが、近似的に $S\approx - \frac{\mu}{T} N$ となることを示せ。

9.&nbsp;一方、縮退温度より十分低い温度では、この自由フェルミ粒子系の熱容量 $C_V$ は $T$ に比例して $C_V = \gamma T$ と書けることがわかっている。このことと設問 8 の結果を考慮して、フェルミ粒子系でのエントロピーを温度の関数としてグラフにせよ。
比較のために、設問 3 で考えたエントロピーの温度依存性も点線で書き加えよ。

### 题目描述

考虑体积 $V$、粒子数 $N$ 的无相互作用粒子系统与温度为 $T$ 的热浴接触，粒子质量为
$m$。可使用
$$
\mathrm dU=\mathrm d'Q-P\,\mathrm dV+\mu\,\mathrm dN,
\qquad
\mathrm d'Q=T\,\mathrm dS\quad(\text{可逆}),
\qquad
F=U-TS.
$$

先作经典处理。配分函数和 Hamiltonian 为
$$
Z=\frac1{h^{3N}N!}
\int\cdots\int
e^{-\beta H}\,
\mathrm d^{3N}p\,\mathrm d^{3N}x,
$$
$$
H=\sum_{i=1}^N
\frac{p_{ix}^2+p_{iy}^2+p_{iz}^2}{2m},
\qquad
\beta=\frac1{k_BT},\quad h=2\pi\hbar.
$$

1. 执行积分，求 $Z(T,V,N)$，并据此求压力
   $P(T,V,N)$。必要时可用高斯积分和大 $N$ 的 Stirling 近似
   $\ln N!\approx N\ln N-N$。
2. 配分函数中含 Gibbs 因子 $1/N!$。简要说明若去掉它，Helmholtz
   自由能将不再满足哪一种热力学性质。
3. 求熵 $S(T,V,N)$，并说明经典结果在 $T\to0$ 时的行为。
4. 求定容热容 $C_V(T,V,N)$。

以下把粒子视为无内部自由度的费米子，并在化学势为 $\mu$ 的粒子浴中用巨正则系综处理。单粒子动能为
$$
\varepsilon_{\boldsymbol k}
=\frac{\hbar^2}{2m}(k_x^2+k_y^2+k_z^2).
$$
体积为边长 $L$ 的立方体，$V=L^3$，采用周期边界条件。

5. 巨配分函数为
   $$
   \Xi(T,V,\mu)
   =\prod_{\boldsymbol k}
   \left(1+e^{-\beta(\varepsilon_{\boldsymbol k}-\mu)}\right).
   $$
   求波矢 $\boldsymbol k$ 的允许取值。
6. 利用 $\Xi$ 证明平均总粒子数
   $$
   \overline N=\sum_{\boldsymbol k}f(\varepsilon_{\boldsymbol k}),
   \qquad
   f(\varepsilon)
   =\frac1{e^{\beta(\varepsilon-\mu)}+1}.
   $$
7. 在远高于简并温度时，$\mu<0$ 且
   $|\mu|\gg k_BT$，可近似
   $f(\varepsilon_{\boldsymbol k})
   \approx e^{-\beta(\varepsilon_{\boldsymbol k}-\mu)}$。
   当 $L$ 足够大时，把第 6 问的波矢求和改写为积分并计算；令
   $\overline N=N$，求 $\mu$ 关于 $T,V,N$ 的表达式。
8. 证明在同一高温区间，熵近似满足
   $$
   S\approx-\frac{\mu}{T}N.
   $$
9. 在远低于简并温度时，自由费米气体定容热容满足
   $C_V=\gamma T$。结合该事实和第 8 问，在同一图中定性画出费米气体熵随温度的变化，并用虚线加入第 3 问经典熵的温度依赖以作比较。

## **Kai**

以下は著者による解答例であり、大学が公表した解答ではない。
### 1.

$$
\begin{aligned}
\int_{- \infty}^\infty dp e^{- \frac{\beta}{2m} p^2}
= \sqrt{\frac{2 \pi m}{\beta}}
= \sqrt{2 \pi m k_B T}
\end{aligned}
$$

であるから、

$$
\begin{aligned}
Z(T,V,N) = \frac{1}{h^{3N} N!} V^N \left(2 \pi m k_B T \right)^{3N/2}
\end{aligned}
$$

を得る。

よって、ヘルムホルツの自由エネルギー $F(T,V,N)$ は次のように求められる：

$$
\begin{aligned}
F(T,V,N)
&= - k_B T \ln Z(T,V,N)
\\
&= - k_B T \left( N \ln V - \ln N!
+ N \ln \frac{(2 \pi m k_B T)^{3/2}}{h^3} \right)
\\
&\approx - k_B T \left( N \ln V + N - N \ln N
+ N \ln \frac{(2 \pi m k_B T)^{3/2}}{h^3} \right)
\\
&= - k_B T N \left( \frac{3}{2} \ln T +  \ln \frac{V}{N}
+ \ln \frac{(2 \pi m k_B)^{3/2} e}{h^3} \right)
\end{aligned}
$$

そこで、 $dF = -S dT - P dV + \mu dN$ を考慮して、
圧力 $P(T,V,N)$ は次のように求められる：

$$
\begin{aligned}
P(T,V,N)
&= - \frac{\partial F(T,V,N)}{\partial V}
\\
&= \frac{k_B T N}{V}
\end{aligned}
$$

### 2.
因子 $N!$ がないと、ヘルムホルツの自由エネルギーが示量性を満たさなくなる。
すなわち、

$$
\begin{aligned}
F(T, \lambda V, \lambda N) = \lambda F(T,V,N)
\end{aligned}
$$

が成り立たなくなる。

### 3.

$$
\begin{aligned}
S(T,V,N)
&= - \frac{\partial F(T,V,N)}{\partial T}
\\
&= k_B N \left( \frac{3}{2} \ln T +  \ln \frac{V}{N}
+ \ln \frac{(2 \pi m k_B)^{3/2} e}{h^3} \right)
+ k_B T N \cdot \frac{3}{2} \frac{1}{T}
\\
&= k_B N \left( \frac{3}{2} \ln T +  \ln \frac{V}{N}
+ \ln \frac{(2 \pi m k_B)^{3/2} e^{5/2}}{h^3} \right)
\end{aligned}
$$

$T \to 0$ のとき $S \to - \infty$ となる。

### 4.

$$
\begin{aligned}
C_V(T,V,N)
&= T \frac{\partial S(T,V,N)}{\partial T}
\\
&= T \cdot k_B N \cdot \frac{3}{2} \frac{1}{T}
\\
&= \frac{3}{2} k_B N
\end{aligned}
$$

### 5.

周期的境界条件から、 $e^{i k_x L} = 1$ なので、整数 $n_x$ を使って、

$$
\begin{aligned}
k_x L = 2 \pi n_x
\ \ \ \ 
\therefore \ \ 
k_x = \frac{2 \pi n_x}{L}
\end{aligned}
$$

同様に、整数 $n_y, n_z$ を使って、

$$
\begin{aligned}
k_y = \frac{2 \pi n_y}{L}
, \ \ \ \ 
k_z = \frac{2 \pi n_z}{L}
\end{aligned}
$$

### 6.
グランドポテンシャル $\Omega (T, V, \mu)$ は、次のようになる：

$$
\begin{aligned}
\Omega(T,V, \mu)
&= - k_B T \ln \Xi (T, V, \mu)
\\
&= - k_B T \sum_k \ln
\left( 1 + e^{ - \beta (\varepsilon_k - \mu)} \right)
\end{aligned}
$$

よって、

$$
\begin{aligned}
\bar{N}
&= - \frac{\partial \Omega (T, V, \mu)}{\partial \mu}
\\
&= k_B T \sum_k 
\frac{ e^{ - \beta (\varepsilon_k - \mu)} \cdot \beta }
{ 1 + e^{ - \beta (\varepsilon_k - \mu)} }
\\
&= \sum_k
\frac{1}{ e^{ \beta (\varepsilon_k - \mu)} + 1 }
\\
&= \sum_k f(\varepsilon_k)
\end{aligned}
$$

### 7.
与えられた近似の下で積分を実行すると、次のようになる：

$$
\begin{aligned}
N
&\approx \iiint e^{ - \beta (\varepsilon_k - \mu) }
\left( \frac{L}{2 \pi} \right)^3 dk_x dk_y dk_z
\\
&= \frac{V}{(2 \pi)^3} e^{\beta \mu}
\int_{- \infty}^\infty e^{- \frac{\beta \hbar^2}{2m} k_x^2} dk_x
\int_{- \infty}^\infty e^{- \frac{\beta \hbar^2}{2m} k_y^2} dk_y
\int_{- \infty}^\infty e^{- \frac{\beta \hbar^2}{2m} k_z^2} dk_z
\\
&= \frac{V}{(2 \pi)^3} e^{\beta \mu}
\left( \frac{2 \pi m }{\beta \hbar^2} \right)^{3/2}
\\
&= V e^{\beta \mu}
\left( \frac{m}{2 \pi \hbar^2 \beta} \right)^{3/2}
\end{aligned}
$$

これを $\mu$ について解く：

$$
\begin{aligned}
e^{\beta \mu}
&= \frac{N}{V}
\left( \frac{2 \pi \hbar^2 \beta}{m} \right)^{3/2}
\\
\therefore \ \ 
\mu
&= \frac{1}{\beta} \ln \left[ \frac{N}{V}
\left( \frac{2 \pi \hbar^2 \beta}{m} \right)^{3/2} \right]
\\
&= k_B T \ln \left[ \frac{N}{V}
\left( \frac{2 \pi \hbar^2}{m k_B T} \right)^{3/2} \right]
\end{aligned}
$$

### 8.
熱的ド・ブロイ波長を $\lambda_T=h/\sqrt{2\pi m k_BT}$ とおくと、設問7より

$$
\frac{\mu}{k_BT}=\ln\left(\frac{N\lambda_T^3}{V}\right).
$$

設問3の古典極限のエントロピーは

$$
S\simeq Nk_B\left[\frac52-\ln\left(\frac{N\lambda_T^3}{V}\right)\right]
=\frac52Nk_B-\frac{\mu N}{T}.
$$

$-\mu/(k_BT)\gg1$ では定数項 $5Nk_B/2$ が相対的に小さいので、

$$
\boxed{S\simeq-\frac{\mu N}{T}}.
$$

### 9.
低温では $dS/dT=C_V/T=\gamma$ である。基底状態のエントロピーを $S(0)=0$ とすれば、

$$
S(T)\simeq\gamma T\qquad(T\ll T_F).
$$

したがってフェルミ気体の曲線は原点から正の傾きで増加する。高温では設問3の古典曲線に近づき、$S\sim(3/2)Nk_B\ln T+\text{定数}$ となる。古典式を低温まで延長した点線は $T\to0$ で $-\infty$ に発散する。

![固定した粒子数・体積におけるフェルミ気体と古典気体のエントロピー](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/science/phys/2020/tokyo-phys-201908-entropy.svg)

## **Reference**

- [東京大学 物理学専攻 令和2年度 公式問題](https://www.phys.s.u-tokyo.ac.jp/wp-content/uploads/2020/04/R2masterphysics.pdf)
