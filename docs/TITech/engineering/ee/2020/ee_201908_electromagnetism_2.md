---
sidebar_label: "2019年8月実施 電磁気学2"
tags:
  - TITech
  - Electromagnetism
---
# 東京工業大学 工学院 電気電子系 2019年8月実施 電磁気学2

## **Author**
Zero

## **Description**
直流電流の作る磁界に関する，以下の設問 (1) および (2)に答えよ。

(1) $x-y$ 平面上で，原点 O を中心とする半径 $a$ の円周を直流電流 $I$ が流れている。 この時，$z$ 軸上の点 $P(0,0,z_1)$ における磁束密度 $\boldsymbol{B}_1$ を求めたい。その導出に関する以下の文章の空欄① $\sim$ ⑥を，適切な式または言葉で埋めよ（同一の番号には同一の式または言葉が入る）。なお，真空の透磁率を $\mu_0$ とする。本問では，ベクトルはボールド体で表記するものとする。

「図 2.1 のように円電流の微小線素ベクトル $d\boldsymbol{s}$ が，$P$ の位置に作る磁束密度を $d\boldsymbol{B}$ とし，これを $d\boldsymbol{B}_z$ とそれに垂直な成分 $d\boldsymbol{B}_{\perp}$ に分け，$dB_z = |d\boldsymbol{B}_z|$ とする。$d\boldsymbol{B}_{\perp}$ については円電流全体からの寄与を合計すると消しあうので，積分すると $|\boldsymbol{B}_{\perp}| = (①)$ となる。次に $dB_z$ を求める。微小線素 $d\boldsymbol{s}$ から点 $P$ に向かうベクトルを $\boldsymbol{R}$ とし，その大きさ $R$ を $R = |\boldsymbol{R}|$ と定義すると，$(②)$ の法則により，外積を $\times$ で表すものとして $d\boldsymbol{B} = \frac{\mu_0}{4\pi}I\frac{d\boldsymbol{s} \leftrightarrow \boldsymbol{R}}{R^3}$ である。$d\boldsymbol{s}$ と $\boldsymbol{R}$ は直交しているので，$d\boldsymbol{B}$ の大きさ $dB = |d\boldsymbol{B}|$ を $\mu_0,I,a,z_1$ および $ds = |d\boldsymbol{s}|$ を用いて表すと $dB = (③)$ となる。一方，$d\boldsymbol{B}$ と $z$ 軸のなす角 $\varphi$ につき，$a$ および $z_1$ を用いると，$\cos\varphi = (④)$ となる。そこで $\mu_0,I,a,z_1$ および $ds$ を用いて $dB_z = (⑤)$ を得る。⑤ を円電流全体について積分することにより，$\mu_0,I,a,z_1$ を用いて $\boldsymbol{B}_1$ の $z$ 成分 $B_z$ を $B_z = (⑥)$ と表すことができる。よって，直交座標成分で書くと $\boldsymbol{B}_1 = (①, ①, ⑥)$ と，$\boldsymbol{B}_1$ が求められた。」 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electromagnetism_2_p1.png" width="300" alt=""/>
</figure>

(2) 図 $2.2$ のように，断面が長方形のコアに細い導線が巻かれた環状コイルがあり（図の破線部分にもコイルは存在する），その内半径は $a$ , 外半径は $b$ , 厚さは $h$ であるとする。コアの表面に沿って，導線は十分に密に巻かれており，巻き数は全体で $N$ である。このとき，以下の設問に答えよ。ただし，コアの透磁率を $\mu$ とする。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electromagnetism_2_p2.png" width="300" alt=""/>
</figure>

- (a) コアの内側 $(a < r < b,0 \le \theta <2\pi, -h/2 < z <h/2)$ では，図 $2.2$ のような円柱座標系 $(r,\theta,z)$ を用いると，コイルに流れる直流電流 $J$ による磁界が 

$$
B_r = B_z = 0,B_{\theta} = \mu NJ/(2\pi r)
$$

となることを示せ。

- (b) コアの外側では，コイルに流れる直流電流 $J$ による磁界がゼロとなることを説明せよ。

- (c) コアの断面 $(a < r < b,0 \le \theta <2\pi, -h/2 < z <h/2)$ を貫く磁束 $\Phi$ は，次式で表されることを示せ。ただし，$\ln(x)$ は $x$ の自然対数を表す。 

$$
\Phi = \frac{\mu NJh}{2\pi}\ln\big(\frac{b}{a}\big)
$$
  
- (d) 環状コイル全体に蓄えられた磁界のエネルギー $U$ を求めよ。 

- (e) この環状コイルの自己インダクタンス $L$ を求めよ。 

## **Kai** 
### (1)
① 0

② ビオ・サバールの法則より、

$$
dB = \frac{\mu_0 I}{4\pi r^2}ds = \frac{\mu_0 I}{4\pi(a^2 + z_1^2)}ds
$$

③ 

$$
\frac{\mu_0 I}{4\pi(a^2 + z_1^2)}ds
$$

④

$$
\frac{a}{\sqrt{a^2 + z_1^2}}
$$

$$
\begin{aligned}
dB_z &= \frac{\mu_0 I}{4\pi(a^2 + z_1^2)}ds \cdot \frac{a}{\sqrt{a^2 + z_1^2}} \\
&= \frac{\mu_0 I a}{4\pi(a^2 + z_1^2)^{\frac{3}{2}}}ds
\end{aligned}
$$

⑤

$$
\frac{\mu_0 I a}{4\pi(a^2 + z_1^2)^{\frac{3}{2}}}ds
$$

$$
\begin{aligned}
B_z &= \int_0^{2\pi} \frac{\mu_0 I a}{4\pi(a^2 + z_1^2)^{\frac{3}{2}}}ad\theta \\
&= \frac{\mu_0 I a^2}{2(a^2 + z_1^2)^{\frac{3}{2}}}
\end{aligned}
$$

⑥

$$
\frac{\mu_0 I a^2}{2(a^2 + z_1^2)^{\frac{3}{2}}}
$$

### (2)
#### (a)
アンペールの法則より、積分路を円周上にすると、

$$
2\pi r B_{\theta} = \mu NJ \Rightarrow B_{\theta} = \frac{\mu NJ}{2\pi r}
$$


#### (b)
積分路 $C_1$ でアンペールの法則を用いると、

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/TITech/engineering/ee_201908_electromagnetism_2_p3.png" width="500" alt=""/>
</figure>

$$
H_3 l - H_4 l = 0 \Rightarrow H_3 = H_4
$$

積分路 $C_2$ でも同様にして

$$
H_1 l - H_2 l = NJl \Rightarrow H_1 - H_2 = NJ
$$

$H_4$ は無限遠で $0$ より、$H_3 = 0S$

よって、$H_2 = 0$ より、$H_1 = NJ$ となり。

コアの外側では，磁界がゼロとなる。

#### (c)

$$
\begin{aligned}
\Phi &= BS \\
&= h\int_a^b \frac{\mu NJ}{2\pi r}dr \\
&= \frac{\mu NhJ}{2\pi} \int_a^b \frac{1}{r}dr \\
&= \frac{\mu NhJ}{2\pi} \log \frac{b}{a}
\end{aligned}
$$

#### (d)

$$
\begin{aligned}
U &= \iiint_u \frac{1}{2\mu}B^2 du \\
&= h \int_0^{2\pi}\int_a^b \frac{1}{2\mu} \cdot \frac{\mu^2N^2J^2}{4\pi^2 r^2} rdrd\theta \\
&= \frac{\mu h N^2 J^2}{8\pi^2} \cdot \int_0^{2\pi} d\theta \int_a^b \frac{1}{r}dr \\
&= \frac{\mu hN^2 J^2}{8\pi^2} \cdot 2\pi \bigg[\log r\bigg]_a^b \\
&= \frac{\mu h N^2 J^2}{4 \pi} \log \frac{b}{a}
\end{aligned}
$$

#### (e)

$$
\frac{1}{2}LJ^2 = \frac{1}{2}J^2 \cdot \frac{\mu h N^2}{2\pi} \log \frac{b}{a}
$$

従って、

$$
L = \frac{\mu h N^2}{2\pi} \log\frac{b}{a}
$$
