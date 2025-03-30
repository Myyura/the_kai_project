---
sidebar_label: '物理学専攻 2020年度 物理学 第2問'
sidebar_position: 4
---

# 東京大学 理学系研究科 物理学専攻 2020年度 物理学 第2問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
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

## **Kai**
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
&\approx - k_B T \left( N \ln V - N - N \ln N
+ N \ln \frac{(2 \pi m k_B T)^{3/2}}{h^3} \right)
\\
&= - k_B T N \left( \frac{3}{2} \ln T +  \ln \frac{V}{N}
+ \ln \frac{(2 \pi m k_B)^{3/2} e}{h^3} \right)
\end{aligned}
$$

そこで、 $dF = -S dT - P dV + \mu N$ を考慮して、
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

### 9.
