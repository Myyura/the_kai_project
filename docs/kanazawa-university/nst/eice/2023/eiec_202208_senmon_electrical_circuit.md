---
sidebar_label: "2022年8月実施 専門科目 電気回路"
tags:
  - Kanazawa-University
  - Electrical-Circuit
---
# 金沢大学 自然科学研究科 電子情報通信学専攻 2022年8月実施 専門科目 電気回路

## **Author**
[金沢大学](https://www.kanazawa-u.ac.jp/)

## **Description**
図1および図2に示す定常状態にある回路がある。以下の設問に答えなさい。ただし，図中の $\omega, R, C, L, \dot{E}, \dot{I}, \dot{V}_C, \dot{V}_R$ はすべて物理量を表す。

問1 図1に示す抵抗 $R$，キャパシタ $C$，交流電圧源 $\dot{E}$ で構成される回路がある。図1の端子対 $1–1'$ から右の回路の複素インピーダンスを求めなさい。

問2 問1で求めた複素インピーダンスについて，$ω$ を $0 \sim \infty$ で変化させた場合の複素インピーダンスの軌跡を複素平面上に図示しなさい。

問3 抵抗 $R$ を $500 Ω$，キャパシタ $C$ を $20\ nF$，交流電圧源 $\dot{E}$ を $1∠0°\ kV$，$1/2π = 0.159$，周波数 $f = 15.9 kHz$ とするとき，電流 $\dot{I}$，電圧 $\dot{V}_C$ および $\dot{V}_R$ について複素数の直交座標形式および複素数のフェーザ形式の両者を求めなさい。

問4 電圧 $\dot{V}_C$，$\dot{V}_R$ および交流電源 $\dot{E}$ の関係をフェーザ図で図示しなさい。


ここで，図1に示す回路の端子対 $2–2'$ にインダクタ $L$ を接続した。接続した回路が図2である。

問5 図2に示す抵抗 $R$，キャパシタ $C$，インダクタ $L$，交流電圧源 $\dot{E}$ で構成される回路がある。図2の端子対 $3–3'$ から右の回路の複素インピーダンスを $ω, R, C, L$ を用いて複素数の直交座標形式で表しなさい。

問6 与えられた $ω, R, L$ に対し，$\dot{E}$ と $\dot{I}$ の位相が同じになる場合があるような $C$ の取りうる範囲を求めなさい。また，このとき，$R$ の条件を $ω, C, L$ を用いて表しなさい。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kanazawa_university/nst/eiec_202208_senmon_electrical_circuit_p1.png" width="600" alt=""/>
</figure>

## **Kai**
### 問1

$$
Z = R - j\frac{1}{\omega C}
$$

または

$$
Z = R + \frac{1}{j\omega C}
$$

となる。

### 問2
$\omega=0$ のとき $R-j\frac{1}{\omega C}\to R-j\infty$, $\omega=\infty$ のとき $R-j\frac{1}{\omega C}\to R$, したがって下図となる。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kanazawa_university/nst/eiec_202208_senmon_electrical_circuit_p2.png" width="220" alt=""/>
</figure>

### 問3

$$
\dot{I}
=\frac{\dot{E}}{R-j\frac{1}{\omega C}}
=\frac{\dot{E}}{R-j\frac{1}{2\pi f C}}
=\frac{1000}{500-j500}
=1+j
$$

- 直交座標形式：$\dot{I}=1+j\ \mathrm{A}$
- フェーザ形式：$\dot{I}=\sqrt{2}\angle 45^\circ\ \mathrm{A}$

$$
\dot{V}_C
=-j\frac{1}{\omega C}\dot{I}
=-j500(1+j)
=500-j500
$$

- 直交座標形式：$\dot{V}_C=500-j500\ \mathrm{V}$
- フェーザ形式：$\dot{V}_C=500\sqrt{2}\angle(-45^\circ)\ \mathrm{V}$

$$
\dot{V}_R=R\dot{I}=500(1+j)=500+j500
$$

- 直交座標形式：$\dot{V}_R=500+j500\ \mathrm{V}$
- フェーザ形式：$\dot{V}_R=500\sqrt{2}\angle 45^\circ\ \mathrm{V}$

### 問4
下図のとおり

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kanazawa_university/nst/eiec_202208_senmon_electrical_circuit_p3.png" width="275" alt=""/>
</figure>


## 問5

$$
\begin{aligned}
Z&=\frac{j\omega LR}{R+j\omega L}-j\frac{1}{\omega C} \\
&=\frac{j\omega LR(R-j\omega L)}{R^2+\omega^2L^2}-j\frac{1}{\omega C} \\
&=\frac{\omega^2L^2R}{R^2+\omega^2L^2}
+j\left(\frac{\omega LR^2}{R^2+\omega^2L^2}-\frac{1}{\omega C}\right)
\end{aligned}
$$

## 問6
$\dot{E}=Z\dot{I}$ より，$\dot{E}$ と $\dot{I}$ の位相が一致するためには **$Z$ が実数**（虚部=0）が必要。  
問5の虚部を $0$ とおく：

$$
\frac{\omega LR^2}{R^2+\omega^2L^2}-\frac{1}{\omega C}=0
$$

$$
\omega^2LCR^2=R^2+\omega^2L^2
$$

$$
(\omega^2LC-1)R^2=\omega^2L^2
$$

ここで $R^2>0$ および $\omega^2L^2>0$ より，成立には

$$
\omega^2LC-1>0\quad\Rightarrow\quad C>\frac{1}{\omega^2L}
$$

また，$R>0$ より

$$
R=\frac{\omega L}{\sqrt{\omega^2LC-1}}
$$
