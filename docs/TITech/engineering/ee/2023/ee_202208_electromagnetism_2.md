---
sidebar_label: "2022年8月実施 電磁気学2"
tags:
  - TITech
  - Electromagnetism
---
# 東京工業大学 工学院 電気電子系 2022年8月実施 電磁気学2

:::danger[留学警示（商务部公告2026年第12号）]

根据中华人民共和国商务部公告2026年第12号，东京科学大学（東京科学大学/Institute of Science Tokyo）已被列入关注名单。请中国留学申请者慎重考虑相关风险，在做出留学决定前充分了解相关政策及其可能带来的影响。

:::

## **Author**
Zero

## **Description**
正の電荷 $q$ を持つ荷電粒子の真空中での運動について，以下の問に答えよ。荷電粒子の質量を $m$ とする。

(1) 図 $2.1$ のような一様な磁束密度 $B$ の磁場および電場 $E$ の中での荷電粒子の運動を考える。領域 I $(0 \le y \le y_1)$ では，磁場は紙面鉛直方向 (表面から裏面の方向) を向いており，電場は $-x$ 方向を向いている。一方，領域 II $(y > y_1)$ では電場はなく，紙面鉛直方向 (表面から裏面の方向) の一様な磁束密度 $B$ の磁場のみがある。 

$y = 0$ の位置から荷電粒子を $+y$ 方向に初速度 $v_0$ で入射させたとき，荷電粒子は領域 I 内を $+y$ 方向に直進した。 

① 荷電粒子が磁場および電場から受ける力の大きさと方向をそれぞれ求めよ。 

② 荷電粒子が $+y$ 方向に直進するための初速度 $v_0$ の条件を求めよ。

次に，荷電粒子が電場のない領域 II に飛び出した後の運動を考える。 

③ 領域 II 内での荷電粒子の軌跡の概略図を描け。ただし，荷電粒子が領域 I と領域 II の境界に戻ってくるまでの軌跡でよい。 

④ 領域 II に飛び出した荷電粒子が，領域 I と領域 II の境界に戻ってくるまでに到達する $y$ の最大値を $y = y_{\max}$ としたとき, $y = 0$ から $y = y_{\max}$ までに外力が荷電粒子にする仕事を求めよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202208_electromagnetism_2_p1.png" width="400" alt=""/>
</figure>

(2) 図 $2.2$ のような一様な磁束密度 $B$ の磁場および電場 $E$ の中での荷電粒子の運動を考える。磁場は紙面鉛直方向 (表面から裏面の方向) を向いており，電場は $+y$ 方向を向いている。時刻 $t = 0$  のときに，原点 $O$ に荷電粒子を静かにおいた。そのときの荷電粒子の初速度は $0$ である。 

① 時刻 $t \ge 0$  における荷電粒子の $x$ 方向と $y$ 方向の速度をそれぞれ $v_x,v_y$ とすると，$x$ 方向と $y$ 方向の運動方程式は式 (2.1) と式 (2.2) のように表される。空欄 $\boxed{(ア)}$ および $\boxed{(イ)}$ に入る数式を求めよ。

$$
\begin{align}
m\frac{dv_x}{dt} = \boxed{(ア)} \tag{2.1} \\
m\frac{dv_y}{dt} = \boxed{(イ)} \tag{2.2}
\end{align}
$$

② 式 (2.1) および式 (2.2) から $v_x$ を消去することで, $v_y$ の微分方程式を求めよ。ただし，$\omega = \frac{qB}{m}$ とし，答には $\omega$ を用いること。 

③ $v_x,v_y$ は，それぞれ式 (2.3) と式 (2.4) で表される。空欄 $\boxed{(ウ)} \sim \boxed{(カ)}$ に入る数式を求めよ。答には $\omega$ を用いること。 

$$
\begin{align}
v_x &= \boxed{(ウ)}\big[1 - \cos(\boxed{(エ)})\big] \tag{2.3} \\
v_y &= \boxed{(オ)} \sin(\boxed{(カ)}) \tag{2.4}
\end{align}
$$

④ 荷電粒子が到達する $y$ の最大値 $y = y_{\max}$ を求めよ。答には $\omega$ を用いること。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202208_electromagnetism_2_p2.png" width="400" alt=""/>
</figure>

## **Kai** 
### (1)
#### ①
磁場: $f = qv_0B,x$ 軸正方向

電場: $F = qE,x$ 軸負方向

#### ②
力のつり合いより、

$$
qv_0B = qE \Rightarrow v_0 = \frac{E}{B}
$$

#### ③
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202208_electromagnetism_2_p3.png" width="350" alt=""/>
</figure>

$$
m\frac{v_0^2}{r} = qv_0B \Rightarrow r = \frac{mv_0}{qB}
$$

#### ④
$(-\frac{mv_0}{qB},y_1)$ を中心とした、半径 $\frac{mv_0}{qB}$ の等速円運動を行うので、

$$
y_{\max} = y_1 + \frac{mv_0}{qB}
$$

また、円運動の中心方向に外力がカロれるので、進行方向との内積は $0$ より、外力の仕事は $0$。

### (2)
#### ①

$$
\left \{
\begin{aligned}
m\frac{dv_x}{dt} &= qv_yB \\
m\frac{dv_y}{dt} &= -qv_xB + qE \\
\end{aligned}
\right.
$$

$$
\boxed{(ア)} = qv_yB,\quad \boxed{(イ)} = qE - qv_xB
$$

#### ②

$$
\left \{
\begin{align}
\frac{dv_x}{dt} &= \omega v_y \qquad \tag{1} \\
\frac{dv_y}{dt} &= -\omega v_x + \frac{qE}{m} \notag \\
\end{align}
\right.
$$

(1) 式に代入、

$$
\begin{align}
-\frac{1}{\omega} \frac{d^2v_y}{dt^2} = \omega v_y \Rightarrow \frac{d^2v_y}{dt^2} + \omega^2v_y = 0 \tag{2}
\end{align}
$$

#### ③
(2) 式の特性方程式は、

$$
\lambda^2 + \omega^2 = 0,\lambda = \pm \lambda \omega
$$

$$
v_y = C_1\cos\omega t + C_2\sin\omega t
$$

$$
v_y|_{t = 0} = 0 = C_1 \Rightarrow v_y = C_2\sin\omega t
$$

$$
\omega C_2\cos\omega t = -\omega v_x + \frac{qE}{m} \Rightarrow v_x = -C_2\cos\omega t + \frac{qE}{\omega m}
$$

$$
v_x|_{t = 0} = 0 = - C_2 + \frac{qE}{\omega m} \Rightarrow C_2 = \frac{qE}{m\omega} = \frac{E}{B}
$$

$$
v_y = \frac{E}{B}\sin\omega t ,\quad v_x = -\frac{E}{B}\cos\omega t + \frac{E}{B} = \frac{E}{B}(1 - \cos\omega t)
$$

従って、

$$
\boxed{(ウ)} = \frac{E}{B},\boxed{(エ)} = \omega t,\boxed{(オ)} = \frac{E}{B},\boxed{(カ)} = \omega t
$$

#### ④

$$
y = \int\frac{E}{B} \sin\omega t dt = \frac{E}{\omega B}[-\cos\omega t] + C
$$

$$
y|_{t = 0} = 0 = -\frac{E}{\omega B} + C
$$

$$
\therefore C = \frac{E}{\omega B}
$$

$$
y = -\frac{E}{\omega B}\cos\omega t + \frac{E}{\omega B} = \frac{E}{\omega B}(1 - \cos\omega t)
$$

$$
y_{\max} = \frac{2E}{\omega B}\quad (\because \omega t = \pi)
$$