---
sidebar_label: "2018年度 電気回路"
sidebar_position: 5
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2018年度 電気回路


## **Author**
Zero

## **Description**
### 【問 1】
図 $1$ の回路について，以下の問いに答えよ．ただし，電源電圧 $E$ の角周波数を $\omega$ とする．

(1) 電源から見たインピーダンス $Z$ を求めよ．

(2) 電流 $I$ を求めよ.

(3) 位相差 $\arg(I/E)$ が $\pi/2$ となる条件を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_circuit_theory_p1.png" width="300" height="240" alt=""/>
</figure>

### 【問 2】
$2$ 端子対回路 $N$ と電圧 $E$ の電源，インピーダンス $Z_G$ からなる図 $2(a)$ の回路と，図 $2(b)$ の回路が等価であるとき，以下の問いに答えよ．

(1) $2$ 端子対回路 $N$ のインピーダンス行列 $Z$ が，

$$
Z = \begin{bmatrix}
z_{11} & z_{12} \\
z_{21} & z_{22} \\   
\end{bmatrix}
$$

で与えられるとき，$E_0$ および $Z_0$ を求めよ．

(2) $2$ 端子対回路 $N$ が図 $2(c)$ で与えられるとき，$E_0$ および $Z_0$ を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_circuit_theory_p2.png" width="400" height="580" alt=""/>
</figure>

### 【問 3】
図 $3$ の回路について，以下の問いに答えよ．ただし，電源電流 $J$ の角周波数を $\omega$ とする．

(1) 抵抗 $R_L$ の電流 $I$ と消費電力 $P$ を求めよ．

(2) 次の $3$ つの場合についてそれぞれ，消費電力 $P$ が最大となる条件を求めよ．

- (a) $X_1,X_2$ がともに可変である．ただし，$R_L < R_0$ とする．
- (b) $X_1$ が固定で，$X_2$ が可変である．
- (c) $X_1$ が可変で，$X_2$ が固定である．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_circuit_theory_p3.png" width="365" height="180" alt=""/>
</figure>

### 【問 4】
図 $4$ の回路について，以下の問いに答えよ．ただし，$R = 2\Omega,C = 1/6 \text{F},L = 3\text{H}$ とする．

(1) 電源電圧 $E$ が $0\text{V}$ で回路が定常状態に達した後，時刻 $t = 0$ で $E$ を $2\text{V}$ に変化させた．$t > 0$ における電流 $i(t)$ を求めよ．

(2) 電源電圧 $E$ が $4\text{V}$ で回路が定常状態に達した後，時刻 $t = 0$ で $E$ を $8\text{V}$ に変化させた．$t > 0$ における電流 $i(t)$ を求めよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_circuit_theory_p4.png" width="365" height="180" alt=""/>
</figure>

## **Kai** 
### 【問 1】
#### (1)

$$
\begin{aligned}
Z &= \frac{1}{j\omega C_1} + R_1 // R_2 + \frac{1}{j\omega C_2} \\
&= \frac{1}{j\omega C_1} + \frac{R_1(1 + j\omega C_2R_2)}{1 + j\omega C_2R_2 + j\omega C_2R_1} \\
&= \frac{1}{j\omega C_1} + \frac{R_1(1 + j\omega C_2R_2)}{1 + j\omega C_2(R_1 + R_2)} \\
&= \frac{1 + j\omega C_2(R_1 + R_2) + j\omega C_1R_1(1 + j\omega C_2R_2)}{j\omega C_1[1 + j\omega C_2(R_1 + R_2)]}
\end{aligned}
$$

#### (2)
$E = ZI_0 \Leftrightarrow I_0 = \frac{E}{Z}$

$$
\begin{aligned}
I &= \frac{R_1}{R_1 + (R_2 + \frac{1}{j\omega C_2})} \cdot I_0 \\
&= \frac{j\omega C_2R_1}{j\omega C_2(R_1 + R_2) + 1} \times \frac{E}{Z} \\
&= \frac{j\omega C_2R_1}{j\omega C_2(R_1 + R_2) + 1} \times \frac{j\omega C_1[1 + j\omega C_2(R_1 + R_2)]E}{1 + j\omega C_2(R_1 + R_2) + j\omega C_1R_1(1 + j\omega C_2R_2)} \\
&= \frac{-\omega^2C_1C_2R_1}{1 + j\omega C_2(R_1 + R_2) + j\omega C_1R_1(1 + j\omega C_2R_2)}E \\
&= \frac{\omega^2C_1C_2R_1}{\omega^2C_1C_2R_1R_2 - 1 - j\omega(C_1R_1 + C_2R_1 + C_2R_2)}E
\end{aligned}
$$

#### (3)
(2) より、

$$
\begin{align}
\frac{I}{E} &= \frac{\omega^2C_1C_2R_1}{\omega^2C_1C_2R_1R_2 - 1 - j\omega(C_1R_1 + C_2R_1 + C_2R_2)} \notag \\
&= \frac{\omega C_1C_2R_1R_2 - 1}{\omega^2 C_1C_2R_1} - j\frac{C_1R_1 + C_2R_1 + C_2R_2}{\omega C_1C_2R_1} \tag{*}
\end{align}
$$

$\arg(\frac{E}{I}) = -\frac{\pi}{2}$ のとき、$\arg(\frac{I}{E}) = \frac{\pi}{2}$ となるから、$(*)$ の実部が $0$ となれば、$\arg(\frac{I}{E}) = \frac{\pi}{2}$ 成立よって、

$$
\begin{aligned}
\omega C_1C_2R_1R_2 - 1 &= 0 \\
\omega^2 &= \frac{1}{C_1C_2R_1R_2} \\
\omega &= (C_1C_2R_1R_2)^{-\frac{1}{2}}
\end{aligned}
$$

### 【問 2】
#### (1)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_circuit_theory_p5.png" width="700" height="272" alt=""/>
</figure>

$$
\begin{pmatrix}
V_1 \\ V_2
\end{pmatrix} = 
\begin{pmatrix}
Z_{11} & Z_{12} \\
Z_{21} & Z_{22} \\
\end{pmatrix}
\begin{pmatrix}
I_1 \\ I_2
\end{pmatrix}
$$

$$
\left \{
\begin{aligned}
V_1 &= Z_{11}I_1 + Z_{12}I_2 \\
V_2 &= Z_{21}I_1 + Z_{22}I_2 \\
\end{aligned}
\right.
$$

$E_0$ は $(a)$ の回路の端子 $1-1'$ 間の開放電圧で($I_2 = 0$ のときの、$V_2$)

$$
E_0 = Z_{21}I_1
$$

$(a)$ の回路について、回路より、

$$
E = Z_GI_1 + V_1
$$

$$
E = Z_GI_1 + Z_{11}I_1 \Leftrightarrow I_1 = \frac{E}{Z_G + Z_{11}}
$$

よって、$E_0 = \frac{Z_{21}}{Z_G + Z_{11}}E$

$Z_0$ 電圧源 $E$ を無効すなわちショートさせたときの $\frac{V_2}{I_2}$ であるから、$V_1 = -Z_GI_1$。$V_1 = Z_{11}I_1 + Z_{12}I_2$ を用いて

$$
Z_{11}I_1 + Z_{12}I_2 = -Z_GI_1
$$

$$
I_1 = -\frac{Z_{12}}{Z_G + Z_{11}}I_2
$$

$V_2 = Z_{21}I_1 + Z_{22}I_2$ より、

$$
V_2 = -\frac{Z_{21}Z_{12}}{Z_G + Z_{11}}I_2 + Z_{22}I_2
$$

$$
\Rightarrow \frac{V_2}{I_2} = Z_{22} - \frac{Z_{12}Z_{21}}{Z_G + Z_{11}}
$$

$$
Z_0 = Z_{22} - \frac{Z_{12}Z_{21}}{Z_G + Z_{11}}
$$

#### (2)
$2$ 端子回路 $N$ が $(c)$ のとき $E_0$ と $Z_0$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_circuit_theory_p6.png" width="315" height="155" alt=""/>
</figure>

$$
Z = \begin{bmatrix}
Z_{11} & Z_{12} \\
Z_{21} & Z_{22} \\
\end{bmatrix} \qquad
\left \{
\begin{aligned}
V_1 &= Z_{11}I_1 + Z_{12}I_2 \\
V_2 &= Z_{21}I_1 + Z_{22}I_2 \\
\end{aligned}
\right.
$$

##### (i)
$I_2 = 0$ のとき、

$$
V_1 = Z_{11}I_1
$$

$$
Z_{11} = Z_a + Z_b
$$

##### (ii)
$I_1 = 0$ のとき、

$$
V_2 = Z_{22}I_2
$$

$$
Z_{22} = Z_b + Z_c
$$

##### (iii)
$V_2 = 0$ のとき、

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_circuit_theory_p7.png" width="270" height="150" alt=""/>
</figure>

回路より、

$$
\begin{align}
-I_2 &= \frac{Z_b}{Z_b + Z_c}I_1 \tag{①} 
\end{align}
$$

$$
0 = Z_{21}I_1 + Z_{22}I_2
$$

$$
\begin{align}
-I_2 &= \frac{Z_{21}}{Z_{22}}I_1 \tag{②} 
\end{align}
$$

①、②から、

$$
\begin{aligned}
\frac{Z_{21}}{Z_{22}} &= \frac{Z_b}{Z_b + Z_c} \\
Z_{21} &= \frac{Z_b}{Z_b + Z_c} Z_{22} = Z_b
\end{aligned}
$$

##### (iv)
$V_1 = 0$ のとき、

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_circuit_theory_p8.png" width="275" height="150" alt=""/>
</figure>

$0 = Z_{11}I_1 + Z_{12}I_2$

$$
\begin{align}
-I_1 = \frac{Z_{12}}{Z_{11}}I_2 \tag{③}
\end{align}
$$

回路より、

$$
\begin{align}
-I_1 = \frac{Z_b}{Z_a + Z_b}I_2 \tag{④}
\end{align}
$$

③、④から、

$$
Z_{12} = \frac{Z_b}{Z_a + Z_b}Z_{11} =Z_b
$$

$(c)$ の回路のインピーダンス行列 $Z$ は以下で表せる

$$
Z = \begin{bmatrix}
Z_{11} & Z_{12} \\
Z_{21} & Z_{22} \\
\end{bmatrix} = 
\begin{bmatrix}
Z_a + Z_b & Z_b \\
Z_b & Z_b + Z_c \\
\end{bmatrix}
$$

よって、(1) の答えから、

$$
E_0 = \frac{Z_{21}}{Z_G + Z_{11}} E = \frac{Z_b}{Z_G + Z_a + Z_b}E
$$

$$
Z_0 = Z_{22} = \frac{Z_{12}Z_{21}}{Z_G + Z_{11}} = Z_b + Z_c - \frac{Z_b^2}{Z_G + Z_a + Z_b}
$$

### 【問 3】
#### (1)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2018_circuit_theory_p9.png" width="720" height="180" alt=""/>
</figure>

$$
\begin{aligned}
R_0J &= [R_0 + jX_1 // jX_2 + R_L]I_0 \\
R_0J &= [R_0 + \frac{jX_1(R_L + jX_2)}{R_L + j(X_1 + X_2)}]I_0 \\
I &= \frac{jX_1}{jX_1 + R_L + jX_2}I_0 \\
I &= \frac{jX_1}{R_L + j(X_1 + X_2)} \times \frac{R_L + j(X_1 + X_2)}{R_0R_L + jR_0(X_1 + X_2) + jR_LX_1 - X_1X_2}R_0J \\
I &= \frac{jX_1R_0}{R_0R_L - X_1X_2 + j[R_0 + (X_1 + X_2) + R_LX_1]}J \\
\end{aligned}
$$

$$
P = \text{Re}[P_c] = \frac{R_0^2R_LX_1^2}{(R_0R_L - X_1X_2)^2 + [R_0(X_1 + X_2) + R_LX_1]^2} |J|^2
$$

#### (2)
##### (a)

$$
\begin{aligned}
\frac{jX_1(R_L + jX_2)}{R_L + j(X_1 + X_2)} &= R_0 \\
jX_1(R_L + jX_2) &= R_0R_L + jR_0(X_1 + X_2)
\end{aligned}
$$

実部、虚部を比較

$$
\left \{
\begin{align}
-X_1X_2 &= R_0R_L \tag{①} \\
X_1R_L &= R_0(X_1 + X_2) \tag{②} \\
\end{align}
\right.
$$

② より、

$$
\begin{align}
X_1 = -\frac{R_0}{R_0 - R_L}X_2 \tag{③}
\end{align}
$$

③ を ① に代入

$$
\begin{aligned}
\frac{R_0}{R_0 - R_L}X_2^2 &= R_0R_L \\
X_2^2 &= R_L(R_0 - R_L) \\
X_2 &= \pm\sqrt{R_L(R_0 - R_L)} \\
X_1 & = \mp R_0\sqrt{\frac{R_L}{R_0 - R_L}}
\end{aligned}
$$

以上から、

$$
X_1  = \mp R_0\sqrt{\frac{R_L}{R_0 - R_L}}
$$

$$
X_2 = \pm\sqrt{R_L(R_0 - R_L)}
$$

##### (b)
$X_1$: 固定 $X_2$: 可変

分母が最小となるとき、$P$ は最大となる

分母を $X_2$ を度数とする関数 $f(X_2)$ としたとき、 $f(X_2)$ の $X_2$ で微分したものが０かつ $f(X_2)$ の $X_2$ の $2$ 階微分が正のときの $X_2$ が求めるものである

$$
\frac{\partial}{\partial X_2} \cdot f(X_2) = 2(R_0R_L - X_1X_2) \cdot (-X_1) + 2[R_0(X_1 + X_2) + R_LX_1] R_0 = 0
$$

$$
\begin{aligned}
X_1(X_1X_2 - R_0R_L) + R_0^2(X_1 + X_2) + R_0R_LX_1 &= 0 \\
X_1^2X_2 + R_0^2X_1 R_0^2X_2 &= 0 \\
X_2(X_1^2 + R_0^2) &= -R_0^2X_1 \\
X_2 &= -\frac{R_0^2}{X_1^2 + R_0^2}X_1
\end{aligned}
$$

$$
\frac{\partial}{\partial X_2^2} \cdot f(X_2) = 2X_1^2 + 2R_0^2 > 0 
$$

よって、

$$
X_2 = - \frac{R_0^2}{X_1^2 + R_0^2}X_1
$$

##### (c)
$P(X_1)$ について、$\frac{\partial}{\partial X_1} \cdot P(X_1) = 0,\frac{\partial^2}{\partial X_1^2} \cdot P(X_1) > 0$ を満たす条件を見つける

### 【問 4】
#### (1)
回路より、

$$
\begin{align}
E = Ri_0(t) + L\frac{di(t)}{dt} \tag{①} \\
i_0(t) = i(t) + \frac{dq(t)}{dt} \tag{②} \\
\frac{q(t)}{C} = L\frac{di(t)}{dt} \Leftrightarrow q(t) = CL\frac{di(t)}{dt} \Leftrightarrow \frac{dq(t)}{dt} = CL\frac{di(t)^2}{dt^2} \tag{③}
\end{align}
$$

② を ① に代入 ( $i_0(t)$を消去 )

$E = R[i(t) + \frac{dq{t}}{dt}] + L\frac{di(t)}{dt}$

$\frac{E}{R_C L} = \frac{d^2i(t)}{dt^2} + \frac{1}{R_C} \cdot \frac{di(t)}{dt} + \frac{1}{CL}i(t)$

$i(t) = i_s + i_c$

$\frac{E}{R_C L} = \frac{1}{CL}i_s \Leftrightarrow i_s = \frac{E}{R}$

$0 = \frac{d^2i(t)}{dt^2} + \frac{1}{R_C}\frac{di(t)}{dt} + \frac{1}{CL}i(t)$

$i_c(t) = Ae^{\lambda t}$ 

$0 = \lambda^2 + \frac{1}{R_C}\lambda + \frac{1}{CL}$

$R = 2,C = \frac{1}{6},L = 3$ に代入

$0 = \lambda^2 + 3\lambda + 2$

$\lambda = -1、-2$

$i_c(t) = C_1e^{-t} + C_2e^{-2t}$

$i(t) = \frac{E}{R} + C_1e^{-t} + C_2e^{-2t}$

$i(t) = \frac{1}{2}E + C_1e^{-t} + C_2e^{-2t}$

$E = 2$ より、

$i(t) = 1 + C_1e^{-t} + C_2e^{-2t}$

$i(0) = 0$ より、

$0 = 1 + C_1 + C_2$

$\frac{di(t)}{dt} = -C_1e^{-t} - 2C_2e^{-2t}$

$\frac{di(t)}{dt} = \frac{1}{CL}q(t)$

$\frac{di(0)}{dt} = 2q(0) = 0$

$0 = -C_1 - 2C_2$

$C_1 = -2 .C_2 = 1$

よって、$i(t) = 1 - 2e^{-t} + e^{-2t}[A]$

#### (2)
$i(t) = \frac{1}{2}E + C_1e^{-t} + C_2e^{-2t}$

$E = 8$ より、

$i(t) = 4 + C_1e^{-t} + C_2e^{-2t}$

$t = 0$ のとき、$i(0) = 0$

$0 = 4 + C_1 + C_2$

$\frac{di(t)}{dt} = -C_1e^{-t} - 2C_2e^{-2t}$

$\frac{di(0)}{dt} = 2q(0) = 2 \times 4 \times \frac{1}{6} = \frac{4}{3}$

$\frac{4}{3} = -C_1 - 2C_2$

$C_1 = -\frac{20}{3},C_2 = \frac{8}{3}$

$i(t) = 4 - \frac{20}{3}e^{-t} + \frac{8}{3}e^{-2t}[A]$