---
sidebar_label: "2017年度 電磁気学3"
tags:
  - institute-of-science-tokyo
  - Physics.Electromagnetism.Biot-Savart-Law
  - Electrical-Electronic.Circuits.Mutual-Inductance
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
---

# 東京工業大学 工学院 電気電子系 2017年度（2016年8月実施）電磁気学3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

透磁率は全領域で $\mu_0$ とする。

![円形電流、微小ループとの相互インダクタンスおよび移動実験（図3.1〜3.3）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-tech-ee/2016/em3-original.png)

図：東京工業大学 電気電子系 2016年実施問題、図3.1〜3.3（原図）。

1. 図3.1の半径 $a$ の円形ループ A に電流 $I$ を流す。中心を原点、面に垂直な軸を $x$ 軸として、軸上の任意の点の磁界の大きさを求めよ。
2. 図3.2のように、半径 $b\ll a$ の微小円形ループ B を、中心が $x=d$ で、その面が A と平行になるように置く。両ループ間の相互インダクタンスを求めよ。
3. B に図3.3の向きの一定電流 $I$ を流し、$x=-\infty$ から $+\infty$ まで一定速度 $u$ で動かす。固定した A に図示の極性で電圧計を接続する。電圧計の内部抵抗は高く、A の電流は無視できる。B が A の中心を通る瞬間を $t=0$ として、電圧計の表示電圧を求め、時間の関数として概形を図示せよ。グラフに各点の値を示す必要はない。$b\ll a$ とする。

#### 题目描述

全空间磁导率为 $\mu_0$。1) 求半径 $a$、电流 $I$ 的圆环 A 轴线上的磁场强度；2) 将半径 $b\ll a$ 的同轴平行小环 B 放在 $x=d$，求互感；3) 小环按图3.3方向通恒定电流，并以速度 $u$ 从负无穷沿轴穿过大环到正无穷。大环接高内阻电压表，忽略大环电流，以通过中心时为 $t=0$，按图中正负端求电压并画出随时间变化的概形。

## **Kai**

### 1)

対称性から軸に垂直な磁界成分は打ち消し合う。ビオ・サバールの法則の軸方向成分を一周積分すると

$$
H(x)=\int_0^{2\pi}\frac{Ia^2}{4\pi(a^2+x^2)^{3/2}}\,d\theta
=\boxed{\frac{Ia^2}{2(a^2+x^2)^{3/2}}}.
$$

### 2)

B 内で A の磁界を一様とみなすと、B を貫く磁束は

$$
\Phi_B=\mu_0H(d)\pi b^2=MI.
$$

従って、両ループの正方向を同じ向きに取った相互インダクタンスは

$$
\boxed{M(d)=\frac{\mu_0\pi a^2b^2}{2(a^2+d^2)^{3/2}}}.
$$

### 3)

相反性より、B が A を貫く向きに作る磁束も $\Phi_A=IM(ut)$ である。A の導線を電圧計の $+$ 端から $-$ 端へたどる向きを正に取ると、図の B の電流と同じ周回方向になる。この向きの誘導起電力は $e=-d\Phi_A/dt$、開放端電圧は $V=-e$ なので

$$
\boxed{
V(t)=I\frac{dM(ut)}{dt}
=-\frac{3\mu_0\pi a^2b^2Iu^2t}
{2(a^2+u^2t^2)^{5/2}}
}.
$$

$V(t)$ は奇関数であり、$t<0$ で正、$t=0$ で $0$、$t>0$ で負となり、$t\to\pm\infty$ では $0$ に近づく。

![小ループ通過時の電圧計表示](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-tech-ee/2016/em3-voltage.svg)
