---
sidebar_label: 2023年8月実施 電磁気学1
tags:
  - institute-of-science-tokyo
  - Physics.Electromagnetism.Coaxial-Capacitor-and-Line
  - Physics.Electromagnetism.Ampere-Law
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Dielectrics-and-Boundary-Conditions
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
  - Physics.Electromagnetism.Electrostatic-Shielding
---
# 東京工業大学 工学院 電気電子系 2023年8月実施 電磁気学1


## **Author**
Zero, 祭音Myyura

## **Description**
半径 $a$ の円筒導体 $A$ の外側を，半径 $c$ の円筒導体 $B$ で囲った同軸線路が真空中にある。同軸線路の中心軸を $z$ 軸にとり，$z$  軸からの距離を $r$ とする。円筒導体 $A$ と $B$ はともに完全導体であり，厚みを無視できるものとする。$2$ 導体間は，半径 $r = b(a < b < c)$ の円筒面を境にして，内側は誘電率 $\varepsilon_1$, 外側は誘電率 $\varepsilon_2$  の誘電体が充填されている。同軸線路の長さ $l$ は半径 $c$ に比べて十分長く，端部効果は無視できるものとする。真空の誘電率は $\varepsilon_0$, 誘電体の透磁率は真空の透磁率 $\mu_0$ と等しいものとして，以下の問に答えよ。

(1) 図 $1.1$ のように，電圧源，抵抗，スイッチ，配線を介して，円筒導体 $A$ と $B$ の $2$ 箇所の端部を繋げて閉回路を形成し，それぞれ電流の往路と復路の同軸線路と見なす。円筒導体 $A$ を $z$ 軸の負の向きに電流 $I(I > 0)$ が，円筒導体 $B$ を $z$  軸の正の向きに電流 $I$ が，それぞれ一様に流れている。

- ① $a < r < c$ における磁界の大きさ $H(r)$ を求めよ。
- ② $r > c$ における磁界の大きさ $H(r)$ を求めよ。
- ③ $2$ 導体間において電流経路に鎖交する磁束 $\Phi$ を求めよ。
- ④ この円筒導体 $A$ と $B$ からなる同軸線路の自己インダクタンス $L$ を求めよ。
- ⑤ この円筒導体 $A$ と $B$ からなる同軸線路が蓄えている磁気エネルギーを求めよ。同軸線路の自己インダクタンスとして $L$ を用いてよい。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/institute-of-science-tokyo/engineering/ee_202308_electromagnetism_1_p1.png" width="500" alt=""/>
</figure>

(2) 次に，図 $1.2$ のように，下端部の配線のみを変更し，円筒導体 $B$ を接地して十分に時間が経過したところ，円筒導体 $A$ に電荷 $Q(Q > 0)$ が帯電した。その後，図 $1.3$ のように，スイッチをオフにした。 

- ① $a < r < c$ における電束密度 $D(r)$ を求めよ。
- ② $a < r < b , b < r < c$ における電界の大きさ $E(r)$ をそれぞれ求めよ。 
- ③ $r > c$ における電界の大きさ $E(r)$ を求めよ。
- ④ この円筒導体 $A$ と $B$ からなるコンデンサの静電容量 $C$ は以下の式で与えられる。

$$
C = \frac{2\pi l}{\frac{1}{\varepsilon_1}\boxed{\text{(あ)}} + \frac{1}{\varepsilon_2}\boxed{\text{(い)}}}
$$

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 空欄（ あ ）および（ い ）に入る数式をそれぞれ答えよ。 

- ⑤ この円筒導体 $A$ と $B$ からなるコンデンサが蓄えている静電エネルギーを求めよ。コンデンサの静電容量として $C$ を用いてよい。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/institute-of-science-tokyo/engineering/ee_202308_electromagnetism_1_p2.png" width="500" alt=""/>
</figure>

(3) さらに，図 $1.4$ のように，この円筒導体 $B$ の外側に導体球を離して置き，その導体球に電荷 $Q\ (Q > 0)$ を与えた。この後，十分に時間が経過したときの円筒導体 $A$ の電荷量を答えよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/institute-of-science-tokyo/engineering/ee_202308_electromagnetism_1_p3.png" width="300" alt=""/>
</figure>

(4) 最後に，この円筒導体 $B$ と導体球を接触させて十分に時間が経過した後に，導体球を離した。さらに十分に時間が経過したときの円筒導体 $B$ の電荷量を答えよ。

### 题目描述

真空中有一条同轴线：半径 $a$ 的圆筒导体 A 外套半径 $c$ 的圆筒导体 B，中心轴为 $z$ 轴，距轴距离为 $r$。A、B 均为厚度可忽略的完全导体。两导体之间以半径

$$
r=b,\qquad a<b<c
$$

的圆柱面为界：内层介质介电率为 $\varepsilon_1$，外层为 $\varepsilon_2$；两者磁导率均为 $\mu_0$。同轴线长度 $l$ 远大于 $c$，忽略端部效应；真空介电常数为 $\varepsilon_0$。

1. 如原 Description 图 1.1，通过电源、电阻、开关和配线连接 A、B 两端形成闭合回路，把二者分别视为电流往路与回路。A 上有沿 $z$ 负方向的均匀电流 $I>0$，B 上有沿 $z$ 正方向的均匀电流 $I$。

   1. 求 $a<r<c$ 时磁场强度大小 $H(r)$。
   2. 求 $r>c$ 时 $H(r)$。
   3. 求两导体间与电流回路交链的磁通 $\Phi$。
   4. 求该同轴线的自感 $L$。
   5. 求同轴线储存的磁能；可以使用自感 $L$。

2. 如图 1.2，只改变下端配线，将 B 接地并等待足够长时间，使 A 带上正电荷 $Q>0$；随后如图 1.3 断开开关。

   1. 求 $a<r<c$ 时的电位移大小 $D(r)$。
   2. 分别求 $a<r<b$、$b<r<c$ 时的电场大小 $E(r)$。
   3. 求 $r>c$ 时的电场大小 $E(r)$。
   4. 电容器电容写成

      $$
      C=
      \frac{2\pi l}
      {\dfrac1{\varepsilon_1}\boxed{\text{(あ)}}
      +\dfrac1{\varepsilon_2}\boxed{\text{(い)}}}.
      $$

      填写 (あ)、(い)。
   5. 求该电容器储存的静电能；可以使用电容 $C$。

3. 如图 1.4，在圆筒 B 外另放一个与其分离的导体球，给导体球正电荷 $Q>0$。等待足够长时间后，求圆筒 A 的电荷量。
4. 最后让圆筒 B 与导体球接触，等待足够长时间后再移开导体球；再次达到静电平衡时，求圆筒 B 的电荷量。

各阶段的开关、接地、连接状态以及图示相对位置均以原 Description 图 1.1 至图 1.4 为准。

## **Kai**
### (1)
#### ①
アンペールの法則より、

$$
2\pi r H(r) = I \Rightarrow H(r) = \frac{I}{2\pi r}
$$

#### ②
等量異符号の電流が鎖交するので、

$$
2\pi r H(r) = 0 \Rightarrow H(r) = 0
$$

#### ③

$$
\begin{aligned}
\Phi &= BS \\
&= l \int_a^c \mu_0 H(r)dr \\
&= l \int_a^c \frac{\mu_0 I}{2\pi r} dr \\
&= \frac{\mu_0 I l}{2\pi} \log r\big |_a^c \\
&= \frac{\mu_0 I l}{2\pi} \log \frac{c}{a}
\end{aligned}
$$

#### ④
$\Phi = LI$ より、

$$
L = \frac{\Phi}{I} = \frac{\mu_0 l}{2 \pi} \log \frac{c}{a}
$$

#### ⑤

$$
\frac{1}{2}LI^2
$$

### (2)
#### ①
ガウスの法則より、

$$
2\pi r l \cdot D(r) = Q \Rightarrow D(r) = \frac{Q}{2\pi r l}
$$

#### ②
##### (i)

$$
a < r < b
$$

$$
\varepsilon_1 E(r) = D(r) \Rightarrow E(r) = \frac{Q}{2\pi \varepsilon_1 r l}
$$

##### (ii)

$$
b < r < c
$$

$$
\varepsilon_2 E(r) = D(r) \Rightarrow E(r) = \frac{Q}{2\pi \varepsilon_2 r l}
$$

#### ③
接地されているので、

$$
E(r) = 0
$$

#### ④
$ac$ 間の電位差 $V_{ac}$ は

$$
\begin{aligned}
V_{ac} &= - \int_c^b \frac{Q}{2\pi \varepsilon_2 r l} dr - \int_b^a \frac{Q}{2\pi 
\varepsilon_1 r l} dr \\
&= \frac{Q}{2\pi \varepsilon_2 l}\log r\big|_b^c + \frac{Q}{2\pi \varepsilon_1 l}\log r\big|_a^b \\
&= \frac{Q}{2\pi \varepsilon_2 l} \log \frac{c}{b} + \frac{Q}{2\pi \varepsilon_1 l} \log \frac{b}{a} \\
&= \frac{Q}{2\pi l}\big(\frac{1}{\varepsilon_2} \log \frac{c}{b} + \frac{1}{\varepsilon_1} \log \frac{b}{a}\big) \\
\end{aligned}
$$

$$
C = \frac{Q}{V_{ac}} = \frac{2\pi l}{\frac{1}{\varepsilon_1} \log\frac{b}{a} + \frac{1}{\varepsilon_2} \log \frac{c}{b}}
$$

従って、

$$
\boxed{\text{(あ)}} = \log\frac{b}{a},\quad \boxed{\text{(い)}} = \log\frac{c}{b}
$$

#### ⑤ 

$$
\frac{Q^2}{2C}
$$

### (3)
静電遮蔽より、$A$ の電荷量は $Q$ である。

### (4)
円筒導体 $B$ は、接地されているので、電荷量は $-Q$ である。
