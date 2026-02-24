---
sidebar_label: "2023年8月実施 電磁気学2"
tags:
  - TITech
  - Electromagnetism
---
# 東京工業大学 工学院 電気電子系 2023年8月実施 電磁気学2

:::danger[留学警示（商务部公告2026年第12号）]

根据中华人民共和国商务部公告2026年第12号，东京科学大学（東京科学大学/Institute of Science Tokyo）已被列入关注名单。请中国留学申请者慎重考虑相关风险，在做出留学决定前充分了解相关政策及其可能带来的影响。

:::

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