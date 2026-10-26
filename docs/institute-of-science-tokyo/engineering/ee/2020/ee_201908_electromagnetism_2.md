---
sidebar_label: 2019年8月実施 電磁気学2
tags:
  - institute-of-science-tokyo
  - Physics.Electromagnetism.Biot-Savart-Law
  - Physics.Electromagnetism.Ampere-Law
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
  - Physics.Electromagnetism.Magnetic-Energy
---
# 東京工業大学 工学院 電気電子系 2019年8月実施 電磁気学2


## **Author**
Zero

## **Description**

直流電流の作る磁界に関する、以下の設問 1) および 2) に答えよ。（150点）

1) $x$-$y$ 平面上で、原点 O を中心とする半径 $a$ の円周を直流電流 $I$ が流れている。この時、$z$ 軸上の点 $\mathrm P(0,0,z_1)$ における磁束密度 $\boldsymbol B_1$ を求めたい。その導出に関する以下の文章の空欄①〜⑥を、適切な式または言葉で埋めよ（同一の番号には同一の式または言葉が入る）。なお、真空の透磁率を $\mu_0$ とする。本問では、ベクトルはボールド体で表記するものとする。

![図2.1 円電流と点Pにおける磁束密度](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2020/ee_201908_electromagnetism_2_original_figure_1.png)

「図2.1のように円電流の微小線素ベクトル $d\boldsymbol s$ が、P の位置に作る磁束密度を $d\boldsymbol B$ とし、これを $d\boldsymbol B_z$ とそれに垂直な成分 $d\boldsymbol B_\perp$ に分け、$dB_z=|d\boldsymbol B_z|$ とする。$d\boldsymbol B_\perp$ については円電流全体からの寄与を合計すると消しあうので、積分すると $|\boldsymbol B_\perp|=\boxed{\text{①}}$ となる。次に $dB_z$ を求める。微小線素 $d\boldsymbol s$ から点 P に向かうベクトルを $\boldsymbol R$ とし、その大きさ $R$ を $R=|\boldsymbol R|$ と定義すると、（②）の法則により、外積を $\times$ で表すものとして

$$
d\boldsymbol B=\frac{\mu_0}{4\pi}I\frac{d\boldsymbol s\times\boldsymbol R}{R^3}
$$

である。$d\boldsymbol s$ と $\boldsymbol R$ は直交しているので、$d\boldsymbol B$ の大きさ $dB=|d\boldsymbol B|$ を $\mu_0,I,a,z_1$ および $ds=|d\boldsymbol s|$ を用いて表すと $dB=\boxed{\text{③}}$ となる。一方、$d\boldsymbol B$ と $z$ 軸のなす角 $\varphi$ につき、$a$ および $z_1$ を用いると、$\cos\varphi=\boxed{\text{④}}$ となる。そこで $\mu_0,I,a,z_1$ および $ds$ を用いて $dB_z=\boxed{\text{⑤}}$ を得る。⑤を円電流全体について積分することにより、$\mu_0,I,a,z_1$ を用いて $\boldsymbol B_1$ の $z$ 成分 $B_z$ を $B_z=\boxed{\text{⑥}}$ と表すことができる。よって、直交座標成分で書くと $\boldsymbol B_1=(\boxed{\text{①}},\boxed{\text{①}},\boxed{\text{⑥}})$ と、$\boldsymbol B_1$ が求められた。」

2) 図2.2のように、断面が長方形のコアに細い導線が巻かれた環状コイルがあり（図の破線部分にもコイルは存在する）、その内半径は $a$、外半径は $b$、厚さは $h$ であるとする。コアの表面に沿って、導線は十分に密に巻かれており、巻き数は全体で $N$ である。このとき、以下の設問に答えよ。ただし、コアの透磁率を $\mu$ とする。

![図2.2 環状コイルの断面と円柱座標](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2020/ee_201908_electromagnetism_2_original_figure_2.png)

a) コアの内側（$a<r<b$、$0\le\theta<2\pi$、$-h/2<z<h/2$）では、図2.2のような円柱座標系 $(r,\theta,z)$ を用いると、コイルに流れる直流電流 $J$ による磁界が

$$
B_r=B_z=0,\qquad B_\theta=\frac{\mu NJ}{2\pi r}
$$

となることを示せ。

b) コアの外側では、コイルに流れる直流電流 $J$ による磁界がゼロとなることを説明せよ。

c) コアの断面（$a<r<b$、$-h/2<z<h/2$）を貫く磁束 $\Phi$ は、次式で表されることを示せ。ただし、$\ln(x)$ は $x$ の自然対数を表す。

$$
\Phi=\frac{\mu NJh}{2\pi}\ln\left(\frac ba\right)
$$

d) 環状コイル全体に蓄えられた磁界のエネルギー $U$ を求めよ。

e) この環状コイルの自己インダクタンス $L$ を求めよ。

### 题目描述

回答以下关于直流电流产生磁场的第 1)、2) 问。（150分）

1) 在 $x$-$y$ 平面内，以原点 O 为中心、半径为 $a$ 的圆周中流过直流电流 $I$。希望求 $z$ 轴上 $\mathrm P(0,0,z_1)$ 点的磁通密度 $\boldsymbol B_1$。在以下推导的空栏①～⑥中填入适当的公式或词语，相同编号填相同内容。真空磁导率为 $\mu_0$；本题以粗体表示向量。

“如图2.1，圆电流中的微小线元向量 $d\boldsymbol s$ 在 P 点产生磁通密度 $d\boldsymbol B$。将其分为 $d\boldsymbol B_z$ 和与之垂直的分量 $d\boldsymbol B_\perp$，令 $dB_z=|d\boldsymbol B_z|$。对 $d\boldsymbol B_\perp$，整个圆电流的贡献相互抵消，积分得到 $|\boldsymbol B_\perp|=\boxed{\text{①}}$。接着求 $dB_z$。令从线元 $d\boldsymbol s$ 指向 P 点的向量为 $\boldsymbol R$，其大小为 $R=|\boldsymbol R|$。根据（②）定律，以 $\times$ 表示叉积，有

$$
d\boldsymbol B=\frac{\mu_0}{4\pi}I\frac{d\boldsymbol s\times\boldsymbol R}{R^3}.
$$

由于 $d\boldsymbol s$ 与 $\boldsymbol R$ 垂直，用 $\mu_0,I,a,z_1$ 及 $ds=|d\boldsymbol s|$ 表示 $dB=|d\boldsymbol B|$，得到 $dB=\boxed{\text{③}}$。另一方面，令 $d\boldsymbol B$ 与 $z$ 轴的夹角为 $\varphi$，用 $a,z_1$ 可得 $\cos\varphi=\boxed{\text{④}}$。因此用 $\mu_0,I,a,z_1,ds$ 得到 $dB_z=\boxed{\text{⑤}}$。将⑤沿整个圆电流积分，用 $\mu_0,I,a,z_1$ 表示 $\boldsymbol B_1$ 的 $z$ 分量，得到 $B_z=\boxed{\text{⑥}}$。于是用直角坐标分量表示，即有 $\boldsymbol B_1=(\boxed{\text{①}},\boxed{\text{①}},\boxed{\text{⑥}})$。”

2) 如图2.2，在矩形截面的芯材上绕细导线形成环形线圈（图中虚线部分也有线圈）。内半径为 $a$、外半径为 $b$、厚度为 $h$。导线沿芯材表面绕得足够密，总匝数为 $N$。回答以下问题，芯材磁导率为 $\mu$。

a) 在芯材内部（$a<r<b$、$0\le\theta<2\pi$、$-h/2<z<h/2$），使用图2.2的柱坐标 $(r,\theta,z)$，证明线圈中直流电流 $J$ 产生的磁场满足

$$
B_r=B_z=0,\qquad B_\theta=\frac{\mu NJ}{2\pi r}.
$$

b) 说明芯材外部由线圈直流电流 $J$ 产生的磁场为零。

c) 证明穿过芯材截面（$a<r<b$、$-h/2<z<h/2$）的磁通 $\Phi$ 为

$$
\Phi=\frac{\mu NJh}{2\pi}\ln\left(\frac ba\right),
$$

其中 $\ln(x)$ 表示 $x$ 的自然对数。

d) 求整个环形线圈储存的磁场能量 $U$。

e) 求该环形线圈的自感 $L$。

## **Kai**
### (1)
① 0

② ビオ・サバールの法則より、

$$
dB = \frac{\mu_0 I}{4\pi R^2}ds = \frac{\mu_0 I}{4\pi(a^2 + z_1^2)}ds
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
十分密な巻線を連続した理想的な環状巻線として扱う。巻線の対称性から $B_r=B_z=0$ であり、$B_\theta$ は同じ $(r,z)$ をもつ円周上で一定である。アンペールの法則より、積分路を円周上にすると、

$$
2\pi r B_{\theta} = \mu NJ \Rightarrow B_{\theta} = \frac{\mu NJ}{2\pi r}
$$


#### (b)

十分密な巻線を連続した理想的な環状巻線として扱う。この対称性では磁界は円周方向であり、$H_\theta$ は同じ $(r,z)$ をもつ円周上で一定である。軸を中心とする半径 $r$ の円をアンペールの積分路に取ると、

$$
2\pi rH_\theta=I_{\mathrm{enc}}.
$$

コアの穴の中では鎖交電流はゼロである。コアより外側では、巻線が積分面を通る往路と復路の電流が打ち消し合うため、やはり $I_{\mathrm{enc}}=0$ である。上下の外部でも鎖交電流はゼロである。従ってコア外では

$$
\boxed{\boldsymbol H=\boldsymbol0,\qquad\boldsymbol B=\boldsymbol0}.
$$

これは理想的な密巻き近似での結論であり、巻線の離散性や引出線による漏れ磁界はこのモデルでは無視する。

#### (c)

$$
\begin{aligned}
\Phi &= \int B_\theta\,dS \\
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
