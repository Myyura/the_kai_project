---
sidebar_label: 2021年8月実施 電気回路1
tags:
  - institute-of-science-tokyo
  - Electrical-Electronic.Control-Theory.Transfer-Function
  - Electrical-Electronic.Circuits.Resistor-Inductor-Capacitor-Resonance
  - Electrical-Electronic.Circuits.Circuit-Transient-Response
  - Mathematics.Differential-Equations.Laplace-Transform
---
# 東京工業大学 工学院 電気電子系 2021年8月実施 電気回路1


## **Author**
Zero

## **Description**
図 $1.1$ の回路について以下の問に答えよ。$R$ を抵抗，$L$ をインダクタンス，$C$ をキャパシタンスとする。$V_{in}$ を入力電圧，$V_{out}$ を出力電圧とする。虚数単位は $j$ を用いる。

問 (1) ~ 問 (4)では，角周波数 $\omega$ に対して図 $1.2$ のように定義された伝達関数 $H(\omega) = \frac{V_{out}(\omega)}{V_{in}(\omega)}$ について考える。

(1) 図 $1.1$ の回路の伝達関数 $H(\omega)$ を答えよ。その際，以下の形に変形して四角枠部(ア)～(ウ)を解答欄に記入せよ。

$$
H(\omega) = \frac{R}{\boxed{(ア)} + j\boxed{(イ)} + \frac{1}{j\boxed{ウ}}}
$$

(2) 伝達関数 $H(\omega)$ の利得 $|H(\omega)|$ が最大となる角周波数 $\omega_0$ を図中の回路素子パラメータ $R,L,C$ のうち必要なものを用いて示せ。

(3) $\omega = \omega_0$ における利得 $|H(\omega_0)|$ を示せ。

(4) 図 $1.1$ の回路はフィルタとして利用することができる。どのようなフィルタか，名称あるいは機能を述べよ。 

問 (5) ~ 問 (7)ではラプラス変換を用いて回路の応答を求める。図 $1.3$ のように複素数 $s$ に対して定義された伝達関数 $H(s) = \frac{V_{out}(s)}{V_{in}(s)}$ について考える。 

(5) 図 $1.1$ の回路の伝達関数 $H(s)$ を答えよ。 

(6) 問 (5)の伝達関数のポール（極）の値を図中の回路素子パラメータ $R,L,C$ のうち必要なものを用いて示せ。 

(7) 問 (6)で求めたポールが $2$ つの負の実数となる場合を考える。それらを $-\alpha_1$ と $-\alpha_2$ とし、$\alpha_1 > \alpha_2$ であるとする。回路の単位ステップ応答 $v_{out}(t)$ を求めよ。答は $R,L,C$ を用いずに $\alpha_1$ および $\alpha_2$ を用いて示せ。 

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/institute-of-science-tokyo/engineering/ee_202108_electrical_circuit_1_p1.png" width="600" alt=""/>
</figure>

### 题目描述

对原 Description 图 1.1 所示电路回答下列问题。$R,L,C$ 分别表示电阻、感抗元件的电感量和电容器的电容量，$V_{\mathrm{in}}$、$V_{\mathrm{out}}$ 分别为输入、输出电压，虚数单位记为 $j$。电路连接与输入、输出端定义以图 1.1 为准。

第 1 至第 4 问使用图 1.2 所定义的频率传递函数

$$
H(\omega)=\frac{V_{\mathrm{out}}(\omega)}
{V_{\mathrm{in}}(\omega)}.
$$

1. 求电路的 $H(\omega)$，并整理为

   $$
   H(\omega)
   =\frac{R}
   {\boxed{\text{(ア)}}+j\boxed{\text{(イ)}}
   +\dfrac1{j\boxed{\text{(ウ)}}}},
   $$

   填写三个方框。
2. 用 $R,L,C$ 中必要的参数表示使增益 $|H(\omega)|$ 最大的角频率 $\omega_0$。
3. 求 $\omega=\omega_0$ 时的增益 $|H(\omega_0)|$。
4. 说明图 1.1 电路作为滤波器时的名称或功能。

第 5 至第 7 问使用 Laplace 变换以及图 1.3 所定义的

$$
H(s)=\frac{V_{\mathrm{out}}(s)}
{V_{\mathrm{in}}(s)}.
$$

5. 求图 1.1 电路的 $H(s)$。
6. 用 $R,L,C$ 中必要的参数表示 $H(s)$ 的极点。
7. 假设两个极点均为负实数，记为 $-\alpha_1,-\alpha_2$，且 $\alpha_1>\alpha_2$。求电路的单位阶跃响应 $v_{\mathrm{out}}(t)$；答案只用 $\alpha_1,\alpha_2$ 表示，不使用 $R,L,C$。

## **Kai**

$R,L,C>0$ とし、ラプラス変換では初期蓄積エネルギーを 0 とする。

### (1)

直列回路の電圧分割より

$$
H(\omega)=\frac{R}{R+j\omega L+\dfrac{1}{j\omega C}}.
$$

したがって、$(\text{ア})=R$、$(\text{イ})=\omega L$、$(\text{ウ})=\omega C$。

### (2)

$$
|H(\omega)|=\frac{R}{\sqrt{R^2+\left(\omega L-\dfrac{1}{\omega C}\right)^2}}.
$$

分母は $\omega L=1/(\omega C)$ のとき最小となるので、

$$
\boxed{\omega_0=\frac{1}{\sqrt{LC}}}.
$$

### (3)

$$
\boxed{|H(\omega_0)|=1}.
$$

### (4)

バンドパスフィルタ（帯域通過フィルタ）である。共振周波数付近を通過させ、低周波・高周波成分を減衰させる。実際、$\omega\to0,\infty$ で $|H(\omega)|\to0$ となる。

### (5)

$$
\boxed{H(s)=\frac{R}{R+sL+\dfrac{1}{sC}}
=\frac{(R/L)s}{s^2+(R/L)s+1/(LC)}}.
$$

### (6)

分母の零点より、極は

$$
\boxed{s=-\frac{R}{2L}\pm\frac{1}{2}
\sqrt{\left(\frac{R}{L}\right)^2-\frac{4}{LC}}}.
$$

### (7)

$\alpha_1+\alpha_2=R/L$ より、単位ステップ入力に対して

$$
V_{\mathrm{out}}(s)=\frac{H(s)}{s}
=\frac{\alpha_1+\alpha_2}{\alpha_1-\alpha_2}
\left(\frac{1}{s+\alpha_2}-\frac{1}{s+\alpha_1}\right).
$$

逆ラプラス変換して、

$$
\boxed{v_{\mathrm{out}}(t)
=\frac{\alpha_1+\alpha_2}{\alpha_1-\alpha_2}
\left(e^{-\alpha_2t}-e^{-\alpha_1t}\right)\quad(t\ge0)}.
$$

入力前の $t<0$ では $v_{\mathrm{out}}(t)=0$。

## **Reference**

- [東京工業大学公式問題：2022年度・2021年実施、電気回路1、PDF 7ページ](https://admissions.isct.ac.jp/plugins/cms/component_download_file.php?contentsDataId=&contentsId=&fileName=exam_ee_20218&key=cd5c2ecd3d4dc49c5c29e8de8374f19b.pdf&pageId=3186&prevId=&type=1)
- [院試パイン：東工大2022年の電気回路解答（無料公開部分）](https://note.com/inshi_pineapple/n/n80ea77a60609)
