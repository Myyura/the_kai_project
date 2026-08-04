---
sidebar_label: 2023年8月実施 電磁気学2
tags:
  - TITech
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
  - Physics.Electromagnetism.Magnetic-Dipole-Torque
  - Physics.Electromagnetism.Biot-Savart-Law
  - Physics.Electromagnetism.Helmholtz-Coil
---
# 東京工業大学 工学院 電気電子系 2023年8月実施 電磁気学2


## **Author**
Zero, 祭音Myyura

## **Description**
コイルに関する以下の問に答えよ。特に指定がない限り，各設問は真空中での実験とし，必要に応じて真空透磁率 $\mu_0$ を用いてもよい。

(1) 図 $2.1$ のように半径 $a$, 巻数 $N$, 抵抗値 $R$, 両端が短絡されている円形コイルがある。次の問に答えよ。

- ① このコイルが磁束密度 $B$ の一様かつ一定な磁場がかかる場所においてあるとき，コイル内に生じている起電力および電流を求めよ。磁束密度の方向と円形コイルの中心軸方向は一致している。なお，電流によって発生する磁束密度は，磁束密度 $B$ に比べて十分小さいため無視できるものとする。

- ② 前問において，磁束密度を時間 $t$, 角周波数 $\omega$ を用いて $B \cos \omega t$ で変化させたとき，コイル内に生じる起電力および電流を求めよ。

(2) 図 $2.2$ のように半径 $a$, 巻数 $N$, 抵抗値 $R$ の円形コイルが，磁束密度 $B$ の一様かつ一定な磁場がかかる場所にあり，磁束密度 ($x$ 軸方向) に直交する $y$ 軸の周りに角速度 $\omega$ で回転している (コイルの中心軸は $xz$ 平面内で回転している)。磁束密度の方向とコイルの中心軸とのなす角度を $\theta$ とする。時刻 $t = 0$ のとき，磁束密度の方向とコイルの中心軸の方向は一致している $(\theta = 0)$。次の問に答えよ。なお，電流によって発生する磁束密度は，磁束密度 $B$ に比べて十分小さいため無視できるものとする。

- ① コイル内に生じる起電力および電流を求めよ。ただし，コイルの両端は短絡されているものとする。 

- ② 前問において，$\theta$ が任意の $2$ つの角度 $\theta_1$ から $\theta_2$ まで ( ただし，$\theta_1 < \theta_2$ ) 変化する間に，巻線内を移動した電荷量 $Q$ と角速度 $\omega$ の間の関係を理由とともに答えよ。 
  
- ③ このコイルに電流 $I$ を流した。ある角度 $\theta$ におけるトルクを求めよ。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202308_electromagnetism_2_p1.png" width="600" alt=""/>
</figure>

(3) 図 $2.3$ のように半径 $a$, 巻数 $N$ の円形コイルを，外部磁場が存在しない場所に置き，電流 $I$ を流してしばらく待った。

- ① 円形コイルの中心 $O$ から中心軸上を距離 $d$ 離れた点における磁束密度の大きさを求めよ。

- ② 図 $2.4$ のように，図 $2.3$ の中心軸上に $d = a$ 離れた点 $O'$ を中心として，同じ円形コイルを設置し，同じ向きで電流 $I$ を流してしばらく待った。この時に，コイル間の中心軸上の $2$ 点 $OO'$ 間の中点における磁束密度の大きさを求めよ。また，このようなコイル配置では，コイル間中心軸上の磁束密度は，どのような特徴をもつか。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_202308_electromagnetism_2_p2.png" width="400" alt=""/>
</figure>
  
### 题目描述

回答下列线圈问题。除非另有说明，实验均在真空中进行，必要时可使用真空磁导率 $\mu_0$。

1. 如原 Description 图 2.1，有一只半径 $a$、匝数 $N$、电阻 $R$、两端短路的圆形线圈。

   1. 把它置于均匀且恒定、磁感应强度为 $B$ 的磁场中，磁场方向与线圈中心轴重合。求线圈内的感应电动势和电流；线圈电流产生的磁场相对 $B$ 足够小，可忽略。
   2. 若磁感应强度随时间变为

      $$
      B\cos\omega t,
      $$

      求线圈内的感应电动势和电流。

2. 如图 2.2，一只半径 $a$、匝数 $N$、电阻 $R$ 的圆形线圈处于沿 $x$ 轴方向、大小为 $B$ 的均匀恒定磁场中，并绕与磁场垂直的 $y$ 轴以角速度 $\omega$ 转动；线圈中心轴在 $xz$ 平面内转动。令磁场方向与线圈中心轴夹角为 $\theta$，且 $t=0$ 时二者同向，即 $\theta=0$。忽略线圈电流自身的磁场。

   1. 在线圈两端短路时，求感应电动势和电流。
   2. 当 $\theta$ 从任意 $\theta_1$ 变到 $\theta_2$，其中 $\theta_1<\theta_2$，求绕组中通过的电荷量 $Q$ 与角速度 $\omega$ 的关系，并说明理由。
   3. 若另在线圈中通以电流 $I$，求线圈在任意角度 $\theta$ 时所受转矩。

3. 如图 2.3，把半径 $a$、匝数 $N$ 的圆形线圈置于无外磁场处，通入电流 $I$ 并等待稳定。

   1. 求线圈中心 O 沿中心轴相距 $d$ 的点处磁感应强度大小。
   2. 如图 2.4，在同一中心轴上距 O 为 $d=a$ 的点 O′ 放置一只相同线圈，并以同向通入相同电流 $I$。求两线圈中心连线 OO′ 的中点处磁感应强度大小；并说明这种线圈布置下，两线圈之间中心轴附近的磁场具有怎样的特征。

## **Kai**
### (1)
#### ①
$V =  -N\frac{d\Phi}{dt}$ で $\Phi$ が一定より、起電力 $= 0$、電流 $= 0$。

#### ②

$$
\begin{aligned}
\Phi &= BS \\
&= B\cos(\omega t) \cdot \pi a^2 \\
&= \pi a^2 B\cos(\omega t)
\end{aligned}
$$

$$
\begin{aligned}
V &= - N\frac{d\Phi}{dt} \\
&= -\pi a^2 NB \frac{d\Phi}{dt} \big(\cos(\omega t)\big) \\
&= -\pi a^2 NB \omega \big(-\sin(\omega t)\big) \\
&= \pi a^2 NB \omega \sin(\omega t)
\end{aligned}
$$

$$
I = \frac{V}{R} = \frac{\pi a^2 NB\omega}{R} \sin(\omega t)
$$

- 起電力: $\pi a^2 NB \omega \sin(\omega t)$
- 電流: $\frac{\pi a^2NB \omega}{R}\sin(\omega t)$

### (2)
#### ①
$\theta = \omega t$ より、

$$
\begin{aligned}
\Phi &= BS \\
&= B\cos\theta \cdot \pi a^2 \\
&= \pi a^2 B\cos(\omega t)
\end{aligned}
$$

よって、(1) - ② と同様にして、

- 起電力: $\pi a^2 NB \omega \sin(\omega t)$
- 電流: $\frac{\pi a^2NB \omega}{R}\sin(\omega t)$

#### ②

$$
i = \frac{dQ}{dt} = \frac{\pi a^2 NB \omega}{R}\sin\omega t
$$

$$
\begin{aligned}
Q &= \frac{\pi a^2NB \omega}{R}\int_{t_1}^{t_2} \sin\omega t dt \qquad \big(\omega t = \theta ,\frac{d\theta}{dt} = \omega\big)\\
&= \frac{\pi a^2 NB \omega}{R} \int_{\theta_1}^{\theta_2} \sin\theta \frac{d\theta}{\omega} \\
&= \frac{\pi a^2 NB}{R} -\cos\theta\big|_{\theta_1}^{\theta_2} \\
&= \frac{\pi a^2NB}{R} (\cos\theta_1 - \cos\theta_2)
\end{aligned}
$$

よって、電荷量 $Q$ は、$\omega$ に依存しない。

#### ③
相互インダクタンスは、

$$
N\Phi = MI \Rightarrow M = \frac{N}{I}\pi a^2 B\cos\theta 
$$

エネルギー $U$ は

$$
U = MI^2 = \pi a^2 NIB \cos\theta
$$

よって、トルク $T$ は

$$
T = \bigg|\frac{dU}{d\theta}\bigg| = \pi a^2 NIB \sin\theta
$$

### (3)
#### ①
ビオ・サバールの法則と、対称性より、

$$
\begin{aligned}
dB &= \frac{\mu_0 NIdl}{4\pi r^2} \cdot \frac{a}{r} =  \frac{\mu_0NIa^2}{4\pi r^3}d\theta \\
\end{aligned}
$$

$$
\begin{aligned}
B &= \int_0^{2\pi}\frac{\mu_0NIa^2}{4\pi r^3}d\theta = \frac{\mu_0 NIa^2}{2r^3} \\
&= \frac{\mu_0 NIa^2}{2(a^2 + d^2)^{\frac{3}{2}}}\quad(\because r = \sqrt{a^2 + d^2})
\end{aligned}
$$

#### ②
①において、$d \rightarrow \frac{a}{2}$ とし、磁束密度の大きさを $2$ 倍する。

$$
\begin{aligned}
B &= 2 \cdot \frac{\mu_0 NI a^2}{2(a^2 + \frac{a^2}{4})^{\frac{3}{2}}} = \frac{\mu_0 NI}{(\frac{5}{4})^{\frac{3}{2}}a}
\end{aligned}
$$

コイル間中心軸よで、一定、一様の磁束密度が表れる。
