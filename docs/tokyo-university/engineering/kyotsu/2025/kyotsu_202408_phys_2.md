---
sidebar_label: '2024年8月実施 物理学 第2問'
tags:
  - Tokyo-University
  - Physics.Electromagnetism.Gauss-Law
  - Physics.Electromagnetism.Capacitance-and-Electrostatic-Energy
  - Physics.Electromagnetism.Parallel-Wire-Transmission-Line
  - Physics.Electromagnetism.Method-of-Images
  - Physics.Electromagnetism.Magnetic-Force
---

# 東京大学 工学系研究科 2024年8月実施 物理学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

以下の I～III に答えよ。すべての導体は無損失とし、真空の誘電率を $\varepsilon_0$、透磁率を $\mu_0$ とする。

### I

半径 $a$ の円形断面をもつ無限に長い導線 A、B が、中心間距離 $d$ で真空中に平行に配置されている。単位長さ当たり $+Q,-Q$ の静電荷が、それぞれ A、B の導線内に一様に分布している。A の中心から B の中心方向へ距離 $x$ の点を P とし、$a<x<d-a$ とする。

![平行導線の断面と電荷・電流の配置](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2025/kyotsu_202408_phys_2_wires_audited.svg)

1. A の電荷によって P に生じる電界の大きさ $E_A(x)$ を求めよ。
2. A、B の電荷による合成電界の大きさ $E_{\mathrm{TOTAL}}(x)$ を求めよ。
3. A、B 間の電位差 $V_{AB}$ を求めよ。
4. 単位長さ当たりの静電容量 $C$ を求めよ。
5. 両導線の単位長さ当たりに働く力の大きさ $F$ を求めよ。

### II

同じ半径 $a$、中心間距離 $d$ の導線対を無限遠で接続し、閉回路を作る。互いに反対方向の定常電流 $I$ が、各導線内に一様に流れている。

1. 導線内部の磁束を無視して、導線対の単位長さ当たりの自己インダクタンス $L_1$ を求めよ。
2. 導線対の特性インピーダンス $Z_0$ を求めよ。

### III

同じ導線対を、接地された無限に広い平面導体から高さ $h$、中心間距離 $d$ の位置に平行に配置する。導線対は無限遠で接続され、互いに反対方向の定常電流 $I$ が各導線内に一様に流れている。

![接地導体上の平行導線と映像電流](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2025/kyotsu_202408_phys_2_ground_audited.svg)

1. A が受ける力の向きを図示し、その理由を説明せよ。
2. この場合の単位長さ当たりの自己インダクタンス $L_2$ は $L_1$ より大きいか小さいか。物理的理由を簡潔に述べよ。

#### 题目描述

所有导体均无损耗，真空介电常数为 $\varepsilon_0$，磁导率为 $\mu_0$。

I. 两根半径 $a$、无限长且截面为圆的导线 A、B 平行放在真空中，中心间距为 $d$。A、B 内分别均匀分布单位长度电荷 $+Q,-Q$。在从 A 中心指向 B 中心的连线上，距 A 中心 $x$ 处取点 P，$a<x<d-a$。

1. 求 A 在 P 处产生的电场大小 $E_A(x)$。
2. 求两根导线在 P 处产生的合电场大小 $E_{\mathrm{TOTAL}}(x)$。
3. 求两导线间电势差 $V_{AB}$。
4. 求单位长度电容 $C$。
5. 求两导线单位长度所受力的大小 $F$。

II. 相同的导线对在无穷远连接成闭合回路，内部均匀流过大小为 $I$、方向相反的稳恒电流。

1. 忽略导线内部磁通，求单位长度自感 $L_1$。
2. 求特性阻抗 $Z_0$。

III. 把该导线对平行放在接地无限导体平面的上方，导线中心距平面高度为 $h$，两导线中心间距仍为 $d$，并在无穷远连接。两根导线内部均匀流过大小为 $I$、方向相反的稳恒电流。

1. 画出 A 所受力的方向并说明理由。
2. 比较此时的单位长度自感 $L_2$ 与 $L_1$ 的大小，简述物理原因。

## **Kai**

### I

#### I.1・I.2

長さ $\ell$、半径 $x$ のガウス円筒を取れば、$2\pi x\ell E_A=Q\ell/\varepsilon_0$ なので

$$
\boxed{E_A(x)=\frac{Q}{2\pi\varepsilon_0x}}.
$$

導線間では両電界がともに A から B を向くため、

$$
\boxed{E_{\mathrm{TOTAL}}(x)=\frac{Q}{2\pi\varepsilon_0}
\left(\frac1x+\frac1{d-x}\right)}.
$$

#### I.3・I.4

向かい合う表面間の電位差を積分すると

$$
\boxed{V_{AB}=\int_a^{d-a}E_{\mathrm{TOTAL}}(x)\,dx
=\frac{Q}{\pi\varepsilon_0}\log\frac{d-a}{a}}.
$$

したがって

$$
\boxed{C=\frac{Q}{V_{AB}}=\frac{\pi\varepsilon_0}{\log((d-a)/a)}}.
$$

#### I.5

B が A の円形断面上に作る電界の平均は、円の中心での電界に等しい。A 内で B の電位が調和関数であることと平均値の性質による。よって、題意の一様電荷分布に働く単位長さ当たりの力は

$$
\boxed{F=Q\frac{Q}{2\pi\varepsilon_0d}
=\frac{Q^2}{2\pi\varepsilon_0d}}\qquad\text{（引力）}.
$$

### II

#### II.1

導線間では二つの磁界が同方向なので、

$$
B(x)=\frac{\mu_0I}{2\pi}\left(\frac1x+\frac1{d-x}\right).
$$

内部磁束を除いた単位長さ当たりの鎖交磁束は

$$
\Phi=\int_a^{d-a}B(x)\,dx
=\frac{\mu_0I}{\pi}\log\frac{d-a}{a}.
$$

したがって

$$
\boxed{L_1=\frac\Phi I=\frac{\mu_0}{\pi}\log\frac{d-a}{a}}.
$$

#### II.2

無損失線路では $Z_0=\sqrt{L_1/C}$ だから

$$
\boxed{Z_0=\frac1\pi\sqrt{\frac{\mu_0}{\varepsilon_0}}\log\frac{d-a}{a}}.
$$

### III

#### III.1

断面内で A を $(0,h)$、B を $(d,h)$ とし、平面から離れる向きを $+z$ とする。無損失導体の磁束遮蔽に対応する映像は A'$=(0,-h)$、B'$=(d,-h)$ にあり、それぞれ実電流と逆向きに流れる。

A は、反対向きの電流 B と A' から反発を受け、同じ向きの電流 B' から引力を受ける。$c=\mu_0I^2/(2\pi)$ と置くと、合力の成分は

$$
F_x=c\left(-\frac1d+\frac d{d^2+4h^2}\right)<0,
\qquad
F_z=c\left(\frac1{2h}-\frac{2h}{d^2+4h^2}\right)>0.
$$

したがって、図のように $\boxed{\text{B から遠ざかり、平面からも離れる斜め上向き}}$ である。水平左向きからの角度を $\alpha$ とすれば $\tan\alpha=(d/(2h))^3$ となる。

![導線 A の受ける磁気力の向き](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2025/kyotsu_202408_phys_2_force_audited.svg)

#### III.2

映像電流が導線間に作る磁界は実電流の磁界を弱める。例えば高さ $h$ の導線間では、鎖交磁束の減少分は

$$
\Delta\Phi=-\frac{\mu_0I}{2\pi}\int_a^{d-a}
\left(\frac{x}{x^2+4h^2}+\frac{d-x}{(d-x)^2+4h^2}\right)dx<0.
$$

したがって

$$
\boxed{L_2<L_1}.
$$

