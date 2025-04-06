---
sidebar_label: '2019年8月実施 数理科学'
tags:
  - Tokyo-University
---

# 東京大学 理学系研究科 化学専攻 2019年8月実施 数理科学

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

以下の問（1）～（4）に答えよ．以下において，質点の質量を $m$ とする．

### （1）

図１のように，天井の固定点 $P$ から糸で吊るされた質点を考える．鉛直線（重力の向き）と糸とのなす角度 $\theta$ が十分に小さい場合には，質点は２次元平面上を運動すると近似することができる．運動の平面は， $\theta=0$ における質点の位置（原点 $O$ とする）を通り，鉛直線に垂直である．以下の問に答えよ．

#### (a) 

$\sin \theta \approx \theta$ ，$\cos \theta \approx 1$ の近似が成り立つ範囲において，質点に働く合力の大きさが，原点 $O$ から質点までの距離 $r$ に比例することを示せ．また，その比例係数 $k$ を求めよ．ただし，重力加速度を $g$ ，糸の長さを $l$ とする．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/science/astron_2023_astro_p1.png" width="300" alt=""/>
</figure>


##### <center> 図１. 糸に吊るされた質点の図．角度 $\theta$ が十分に小さい場合，平面上の運動として近似できる．

前問（１）のように，原点からの距離に比例した復元力（バネ定数$k$ ）が，質点の位置から原点へ向かう方向に働く中心力となる場合の運動は，２次元調和振動として記述される．

### （2）
質点の位置ベクトルを２次元直交座標で $r=(x,y)$ と表す．まず手始めに，運動が $x$ 軸上に限られる１次元調和振動（常に $y=0$）を考えよう．以下の問に答えよ．

#### (b) 
質点の運動方程式を $k$ を使って書け．

#### (c) 
その運動方程式の一般解を時間 $t$ の関数として求めよ．

#### (d) 
振動の周期 $T$ を求めよ．

### （3）
次に，$y$方向の運動も考えると，その運動は一般に楕円軌道を描くことが知られている．この楕円運動を，２次元極座標 $r=(r,\varphi)$ で考えよう．原点周りの角運動量 $L$ が保存することを利用すれば，動径の長さ（原点からの距離）$r$ のみの関数として，有効ポテンシャル $V_{\mathrm{eff}}(r)$ を以下の式 (1) のように書くことができる．

$$
V_{\mathrm{eff}}(r)=\frac{kr^{2}}{2}+\frac{L^{2}}{2mr^{2}} \tag{1}
$$

以下の問に答えよ．

#### (e)
式 (1) の右辺第１項 $\frac{kr^2}2$ は復元力のポテンシャルを表している．それでは右辺第２項 $\frac{L^2}{2mr^2}$ は何と呼ばれる力に起因する項か．力の名称を答えよ．

#### (f)
有効ポテンシャル $V_{\mathrm{eff}}(r)$ が極小となるときの距離 $r$（この値を $r_0$ とする），および $r=r_0$ での極小値  $V_{\mathrm{eff}}(r_0)$ を求めよ．

#### (g)
距離 $r$ が $r_0$ に近い値のとき，具体的には $|r- r_0| \ll r_0$ のとき，有効ポテンシャルはその極小値を基準として以下の式 (2) で表せる

$$
V_{\mathrm{eff}}\:(r)\:=\:V_{\mathrm{eff}}\:(r_{0})\:+\:a\:(r\:-\:r_{0})^{2}\:+O\:\left((r\:-\:r_{0})^{3}\right)\tag{2}
$$

ただし，$O( ( r - r_{0}) ^{3})$  は $(r - r_{0})$ に関する３次以上の高次項を表す．式 (2) の２次の展開係数 $a$ を Taylor 展開などの方法により求めよ．

#### (h)
距離 $r$ が $r_0$ の近傍で微小振動するとき，式 (2) の高次項を無視して考えることができる．距離 $r$ が伸び縮みする振動の周波数 $\nu_r(={\frac{\omega_{r}}{2\pi}})$ を $a$ を用いて表せ．

### （4）
この楕円運動を２次元直交座標で考えると，その $x$ 方向の振動の周波数 $\nu_{x}$は，問（２）で考えた１次元調和振動の場合と同じである．一方，前問 (h) では，極座標における振動の周波数 $\nu_{r}$ を求めた．以下の問に答えよ．

#### (i) 
両者の周波数を比較すると， $\nu_r$ は $\nu_{x}$ 𝑥 の何倍になっているか．

#### (j) 
周波数比 $\nu_r/\nu_x$ が $1$ とはならない理由を説明せよ．

## **Kai**
### (1)
#### (a)
質点に働く合力の大きさは

$$
\begin{aligned}
mg \tan \theta \approx mg \cdot \frac{r}{l}
\end{aligned}
$$

なので $r$ に比例し、比例係数は

$$
\begin{aligned}
k = \frac{mg}{l}
\end{aligned}
$$

である。

### (2)
#### (b)

$$
\begin{aligned}
m \frac{d^2x}{dt^2} = -kx
\end{aligned}
$$

#### (C)

$$
\begin{aligned}
x = A \sin \left( \sqrt{\frac{k}{m}} t \right)
+ B \cos \left( \sqrt{\frac{k}{m}} t \right)
\ \ \ \ \ \ \ \ (A,B \text{ は積分定数})
\end{aligned}
$$

#### (d)

$$
\begin{aligned}
T = 2 \pi \sqrt{\frac{m}{k}}
\end{aligned}
$$

### (3)
#### (e)
遠心力

#### (f)

$$
\begin{aligned}
\frac{dV_{\mathrm{eff}}(r)}{dr}
&= kr - \frac{L^2}{mr^3}
\\
&= \frac{mkr^4 - L^2}{mr^3}
\end{aligned}
$$

であり、 $r_0 \gt 0$ なので

$$
\begin{aligned}
r_0 &= \left( \frac{L^2}{mk} \right)^\frac{1}{4}
,\\
V_\mathrm{eff}(r_0)
&= \frac{k}{2} \frac{L}{\sqrt{mk}} + \frac{L^2}{2m} \frac{\sqrt{mk}}{L}
\\
&= L \sqrt{\frac{k}{m}}
\end{aligned}
$$

である。

#### (g)

$$
\begin{aligned}
\frac{d^2V_{\mathrm{eff}}(r)}{dr^2}
&= k + \frac{3L^2}{mr^4}
\\
\therefore \ \ 
\frac{d^2V_{\mathrm{eff}}(r_0)}{dr^2}
&= k + \frac{3L^2}{mr_0^4}
\\
&= k + \frac{3L^2}{m} \frac{mk}{L^2}
\\
&= 4k
\\
\therefore \ \ 
a
&= \frac{1}{2!} \frac{d^2V_{\mathrm{eff}}(r_0)}{dr^2}
\\
&= 2k
\end{aligned}
$$

#### (h)
(2) と同様に考えると、次がわかる：

$$
\begin{aligned}
\nu_r
&= \frac{1}{2\pi} \sqrt{\frac{4k}{m}}
\\
&= \frac{1}{2\pi} \sqrt{\frac{2a}{m}}
\end{aligned}
$$

### (4)
#### (i)
2倍

#### (j)
角運動量保存則より、楕円軌道である。
楕円は（長軸と短軸の長さが等しくない場合）、
中心点 O に関する回転対称性を考えると最小角度は180°であるので、
$\nu_r / \nu_x = 2$ がわかる。