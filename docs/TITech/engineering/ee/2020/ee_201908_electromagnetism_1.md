---
sidebar_label: "2019年8月実施 電磁気学1"
tags:
  - TITech
  - Electromagnetism
---
# 東京工業大学 工学院 電気電子系 2019年8月実施 電磁気学1

:::danger[留学警示（商务部公告2026年第12号）]

根据中华人民共和国商务部公告2026年第12号，东京科学大学（東京科学大学/Institute of Science Tokyo）已被列入关注名单。请中国留学申请者慎重考虑相关风险，在做出留学决定前充分了解相关政策及其可能带来的影响。

:::

## **Author**
Zero

## **Description**
設問 (1)～(2) を通して全ての領域で誘電率を $\varepsilon_0$ とする。

(1) 図 $1.1$ のように，単位体積当たりの電荷密度 $\rho(> 0)$ が一定で，半径が $a$ の球状に分布した電荷がある。以下の問に答えよ。

- (a) 球の中心 O から距離 $r (>0)$ の点における電界の大きさ $E$ を求め，$r$ に対する変化の概略をグラフに示せ。

- (b) 球の中心 O から距離 $r$ の点における電位 $V$ を求め，$r$ に対する変化の概略をグラフに示せ。ただし，無限遠を電位の基準 $(V = 0)$ とする。

- (c) 図 $1.1$ のように球の中心 O を原点として直交座標の $x,y,z$ 軸を定めたとき，$r < a$ の位置における $x,y,z$ 各方向の電界成分 $E_x,E_y,E_z$ を求めよ。
  
  原点から点 $(x,y,z)$ 方向の単位ベクトルが $(\frac{x}{r},\frac{y}{r},\frac{z}{r})$ であることを利用せよ。ただし，$r = \sqrt{x^2 + y^2 + z^2}$ である。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electromagnetism_1_p1.png" width="300" alt=""/>
</figure>

(2) 

- (a) 図 $1.2$ のように，図 $1.1$ の球状に分布した電荷に，位置 $(d,0,0)$ を中心とする半径 $b$ の球状に分布した電荷を追加した。ただし，$d > 0$ および $b + d < a$ であり，電荷を追加した領域の単位体積当たりの電荷密度は一定値 $\rho + \rho_1$ になった。

  新しく電荷を追加した領域内部での $x,y,z$ 各方向の電界成分 $E_x,E_y,E_z$ を求めよ。

- (b) 図 $1.3$ のように，図 $1.1$ の球状に分布した電荷のうち，位置 $(d,0,0)$ を中心とする半径 $b$ の球内の電荷を取り去ると，この領域内部では電界の方向と大きさが一定となる。その方向と大きさを求めよ。ただし，(a) と同じく $d > 0$ および $b + d < a$ とする。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electromagnetism_1_p2.png" width="600" alt=""/>
</figure>

## **Kai** 
### (1)
#### (a)
$r < a$ , ガウスの法則より、

$$
\begin{aligned}
4\pi r^2 \cdot E &= \frac{\rho}{\varepsilon_0} \cdot \frac{4}{3}\pi r^3 \\
E &= \frac{\rho}{3\varepsilon_0}r
\end{aligned}
$$

$r > a$ , ガウスの法則より、

$$
\begin{aligned}
4\pi r^2 \cdot E &= \rho \cdot \frac{4\pi}{3\varepsilon_0}a^3 \\
E &= \frac{\rho a^3}{3\varepsilon_0 r^2}
\end{aligned}
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electromagnetism_1_p3.png" width="300" alt=""/>
</figure>

#### (b)
$r > a$ の場合、

$$
\begin{aligned}
V &= -\int_{\infty}^r \frac{\rho a^3}{3\varepsilon_0 r^2}dr \\
&= -\frac{\rho a^3}{3\varepsilon_0}\int_{\infty}^r \frac{1}{r^2}dr \\
&= \frac{\rho a^3}{3\varepsilon_0}\bigg[\frac{1}{r}\bigg]_{\infty}^r \\
&= \frac{\rho a^3}{3\varepsilon_0r}
\end{aligned}
$$

$r < a$ の場合、

$$
\begin{aligned}
V &= \frac{\rho^2a^3}{3\varepsilon_0a} - \int_a^r \frac{\rho r}{3\varepsilon_0}dr \\
&= \frac{\rho^2a^2}{3\varepsilon_0} - \frac{\rho}{3\varepsilon_0}\int_a^r rdr \\
&= \frac{\rho a^2}{3\varepsilon_0} - \frac{\rho}{3\varepsilon_0}\bigg[\frac{1}{2}r^2\bigg]_a^r \\
&= \frac{\rho}{6\varepsilon_0} \cdot 2a^2 - \frac{\rho}{6\varepsilon_0}(r^2 - a^2) \\
&= \frac{\rho}{6\varepsilon_0}(3a^2 - r^2)
\end{aligned}
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electromagnetism_1_p4.png" width="300" alt=""/>
</figure>

#### (c)

$$
\begin{aligned}
E_x &= \frac{\rho r}{3\varepsilon_0} \cdot \frac{x}{r} = \frac{\rho}{3\varepsilon_0}x \\
E_y &= \frac{\rho r}{3\varepsilon_0} \cdot \frac{y}{r} = \frac{\rho}{3\varepsilon_0}y \\
E_z &= \frac{\rho r}{3\varepsilon_0} \cdot \frac{z}{r} = \frac{\rho}{3\varepsilon_0}z \\
\end{aligned}
$$

### (2)
#### (a)

$$
E' = \frac{\rho_1}{3\varepsilon_0}\begin{pmatrix}x-d\\y\\z\end{pmatrix},
E = \frac{\rho}{3\varepsilon_0}\begin{pmatrix}x\\y\\z\end{pmatrix}
$$

$$
\begin{aligned}
E_x &= \frac{\rho_1 + \rho}{3\varepsilon_0}x - \frac{\rho_1}{3\varepsilon_0}d \\
E_y &= \frac{\rho_1 + \rho}{3\varepsilon_0}y \\
E_z &= \frac{\rho_1 + \rho}{3\varepsilon_0}z
\end{aligned}
$$

#### (b)

$$
E'' = - \frac{\rho}{3\varepsilon_0}\begin{pmatrix}x-d \\ y \\ z\end{pmatrix}
$$

$$
\begin{aligned}
E &= E'' + E \\
&= -\frac{\rho}{3\varepsilon_0}\begin{pmatrix}x-d\\y\\z\end{pmatrix} + \frac{\rho}{3\varepsilon_0}\begin{pmatrix}x\\y\\z\end{pmatrix} \\
&= \frac{\rho}{3\varepsilon_0}\begin{pmatrix}d\\0\\0\end{pmatrix}
\end{aligned}
$$

$$
E_x = \frac{\rho d}{3\varepsilon_0} ,E_y = E_z = 0
$$