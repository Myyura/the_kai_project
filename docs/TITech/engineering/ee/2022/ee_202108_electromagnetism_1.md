---
sidebar_label: "2021年8月実施 電磁気学1"
tags:
  - TITech
  - Electromagnetism
---
# 東京工業大学 工学院 電気電子系 2021年8月実施 電磁気学1

## **Author**
Zero

## **Description**
完全導体からなる円筒状電極をもつ長さ $l$ の同軸コンデンサについて，以下の問に答えよ。問 (1)～(2) を通して，導体の厚さは十分薄く，無視できる。また，円筒端部における電界の乱れは無視し，円筒部分のみがキャパシタンスに寄与するものとする。真空の誘電率は $\varepsilon_0$ を用いよ。

(1) 図 $1.1$ のように，真空中におかれた，半径 $a,b$ を持つ $2$ つの円筒状電極に電圧 $V$ が印加されている。円筒の長さ $l$ は外側の円筒の直径よりも十分に長い ($l \gg 2b$) とする。

- (a) 印加電圧 $V$ によって，内側および外側の円筒に，それぞれ単位長さあたり $+q$ および $-q$ の電荷が誘起されるとする。このとき，円筒の中心軸から垂直方向に距離 $d(a < d < b)$ 離れた点 $P$ における電界強度を求めよ。

- (b) 点 $P$ における電位を求めよ。

- (c) $2$ つの円筒間の単位長さあたりのキャパシタンスを求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202108_electromagnetism_1_p1.png" width="400" alt=""/>
</figure>

- (d) 図 $1.2$ のように，中心軸からの距離 $d$ とともに誘電率が変化する誘電体で $2$ つの円筒間を満たすと，電界が $d$ によらず一定となった。このとき，誘電率が距離 $d$ に対してどのように変化するか説明せよ。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202108_electromagnetism_1_p2.png" width="400" alt=""/>
</figure>

(2) 図 $1.3$ のように，真空中におかれた，半径 $a,b,c(a < b < c)$ を持つ $3$ つの円筒状電極 $A,B,C$ からなる同軸コンデンサを考える。内側の円筒 $A$ と外側の円筒 $C$ は細い導線で接続され，接地されている。円筒の長さ $l$ はもっとも外側の円筒の直径よりも十分に長い $(l \gg 2c)$ とする。

- (e) 円筒 $A$ と円筒 $C$ につながる端子 $1$ と円筒 $B$ につながる端子 $2$ との間の単位長さあたりのキャパシタンスを求めよ。

- (f) 円筒 $B$ に単位長さあたり $q$ の正電荷があるとき，円筒 $A$ と円筒 $C$ に誘起される単位長さあたりの電荷量を，それぞれ符号を含めて求めよ。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202108_electromagnetism_1_p3.png" width="500" alt=""/>
</figure>

## **Kai** 
### (1)
#### (a)
ガウスの法則より、

$$
2\pi d \cdot L \cdot E = \frac{q}{\varepsilon_0}L
$$

$$
E = \frac{q}{2\pi\varepsilon_0d}
$$

#### (b)

$$
\begin{aligned}
V &= -\int_a^b \frac{q}{2\pi\varepsilon_0r}dr \\
&= \frac{q}{2\pi\varepsilon_0}\big[\log r\big]_d^a \\
&= \frac{q}{2\pi\varepsilon_0}\log \frac{a}{b}
\end{aligned}
$$

$$
q = \frac{2\pi\varepsilon_0}{\log\frac{a}{b}}V
$$

従って、

$$
\begin{aligned}
V_d &= -\int_b^d \frac{1}{2\pi\varepsilon_0 r} \cdot \frac{2\pi\varepsilon_0 V}{\log \frac{a}{b}}dr \\
&= \frac{V}{\log\frac{a}{b}}\big[\log r\big]_d^b \\
&= \frac{\log\frac{b}{d}}{\log \frac{a}{b}}V
\end{aligned}
$$

#### (c)

$$
c = \frac{q}{V} = \frac{2\pi\varepsilon_0}{\log\frac{b}{a}}
$$

#### (d)
$E = \frac{q}{2\pi\varepsilon_0 d} = c\quad(c = \text{const})$ より、$\varepsilon = \frac{q}{2\pi cd} = \frac{c'}{d} \quad (c' = \text{const})$。誘電率は、$d$ に反比例する。

### (2)
#### (e)
円筒 $B$ に電荷 $Q$ を与え、内側に $Q_1$, 外側に $Q_2$ が生じるとする。(単位長さ当たり)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202108_electromagnetism_1_p4.png" width="300" alt=""/>
</figure>

このとき、$b < r < c$ における電界 $E_2$ は,ガウスの法則より、

$$
\begin{aligned}
E_2 = \frac{Q_2}{2\pi \varepsilon_0 r},V &= -\int_c^b \frac{Q_2}{2\pi\varepsilon_0 r}dr \\
&= \frac{Q_2}{2\pi \varepsilon_0}\big[\log r\big]_b^r \\
&= \frac{Q_2}{2\pi\varepsilon_0}\log\frac{c}{b}
\end{aligned}
$$

$$
Q_2 = \frac{2\pi\varepsilon_0}{\log\frac{c}{b}}V
$$

また、$a < r < b$ における電界 $E_1$ は,ガウスの法則より、

$$
E_1 = \frac{Q_1}{2\pi\varepsilon_0 r}
$$

$$
\begin{aligned}
V &= -\int_a^b -\frac{Q_1}{2\pi \varepsilon_0 r} dr \\
&= \frac{Q_1}{2\pi\varepsilon_0}\big[\log r\big]_a^b \\
&= \frac{Q_1}{2\pi\varepsilon_0} \log \frac{b}{a}
\end{aligned}
$$

$$
Q_1 = \frac{2\pi\varepsilon_0}{\log\frac{b}{a}}V
$$

よって、

$$
Q = Q_1 + Q_2 = \frac{2\pi\varepsilon_0}{\log \frac{b}{a}}V + \frac{2\pi\varepsilon_0}{\log\frac{c}{b}}V = 2\pi\varepsilon_0 V\bigg(\frac{1}{\log\frac{c}{b}} + \frac{1}{\log\frac{b}{a}}\bigg)
$$

$$
c = \frac{Q}{V} = 2\pi\varepsilon_0 \bigg(\frac{1}{\log\frac{c}{b}} + \frac{1}{\log\frac{b}{a}}\bigg)
$$

#### (f)
$Q \rightarrow q$ として、円筒 $A$ と円筒 $C$それぞれに誘起される単位長さあたりの電荷量を $Q_A,Q_C$ とすると、

$$
V = \frac{q}{2\pi\varepsilon_0(\frac{1}{\log\frac{c}{b}} + \frac{1}{\log\frac{b}{a}})}
$$

$$
Q_A = -q_1 = -\frac{\log\frac{c}{b}}{\log\frac{b}{a} + \log\frac{c}{b}}q
$$

$$
Q_C = -q_2 = -\frac{\log\frac{b}{a}}{\log\frac{b}{a} + \log\frac{c}{b}}q
$$