---
sidebar_label: '2007年8月実施 筆記試験 第3問'
tags:
  - Tokyo-University
  - Computer-Science.Graphics.Hough-Transform-for-Line-Detection
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2007年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
Consider a method to find equations of two straight boundary lines of the two-colored regions like Fig. 1. Suppose the points in Fig. 2 are derived through processing the image of Fig. 1 and answer the following questions.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200708_3_p1.png" width="300" alt=""/>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200708_3_p2.png" width="300" alt=""/>
</figure>

(1) The line $L_0$ that passes the point $(x_0, y_0)$ as in Fig. 3 is described as
$$y=a_0x+b_0.$$
The point $P_0(a_0, b_0)$ of the $a$-$b$ parameter coordinates (Fig. 4) shows the line $L_0$. Explain what the parameters of $a_0, b_0$ mean in the $x$-$y$ coordinates.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200708_3_p3.png" width="600" alt=""/>
</figure>

(2) Rotate the line $L_0$ in Fig. 3 at the point $(x_0, y_0)$. Illustrate the trajectory of the point $P_0$ in the $a$-$b$ coordinates.

(3) Consider the three points $(x_i, y_i), 1 \le i \le 3$ on a line as in Fig. 5. Let $L_i$ be a line that passes $(x_i, y_i), 1 \le i \le 3$. Rotate each line $L_i$ at $(x_i, y_i)$. Illustrate the corresponding trajectories of the point $P_i$ in the $a$-$b$ coordinates.

(4) Considering the methods described above, explain how to get the equations of the two straight boundary lines from the points of Fig. 2.

### 题目描述

考虑如何求出图 1 所示双色区域的两条直线边界方程。假设已通过图像处理得到图 2 中的一组点，回答下列问题；各图沿用原文图片。

1. 如图 3，经过 $(x_0,y_0)$ 的直线 $L_0$ 写成

   $$
   y=a_0x+b_0.
   $$

   参数空间 $a$-$b$ 中的点 $P_0(a_0,b_0)$ 表示该直线。说明参数 $a_0,b_0$ 在原 $x$-$y$ 坐标系中的含义。
2. 让直线 $L_0$ 绕固定点 $(x_0,y_0)$ 旋转，在 $a$-$b$ 参数空间中画出对应点 $P_0$ 的轨迹。
3. 如图 5，三点 $(x_i,y_i)$（$1\le i\le3$）位于同一直线上。令 $L_i$ 为经过 $(x_i,y_i)$ 的直线，并让每条 $L_i$ 绕各自固定点旋转；在参数空间中画出相应点 $P_i$ 的轨迹。
4. 根据上述方法，说明如何由图 2 的点求出两条直线边界的方程。


## **Kai**

### (1)

$a_0$ は直線の傾き $\Delta y/\Delta x$、$b_0$ は $y$ 軸との交点の $y$ 座標である。直線の $x$ 軸に対する角を $\alpha$ とすると $a_0=\tan\alpha$。ただし垂直線 $x=\text{constant}$ は有限の $a_0,b_0$ では表せない。

### (2)

点 $(x_0,y_0)$ を通る条件は $y_0=ax_0+b$ だから、パラメータ平面での軌跡は

$$\boxed{b=-x_0a+y_0}.$$

これは傾き $-x_0$、$b$ 切片 $y_0$ の直線である。$x_0=0$ なら水平線となる。元の直線が垂直になる方向では $a$ が発散するため、この座標表示ではその方向を有限点として含められない。

### (3)

三つの軌跡はそれぞれ

$$\boxed{b=-x_i a+y_i\quad(i=1,2,3)}$$

となる。元の3点を通る直線を $y=a_*x+b_*$ とすれば、各式に $a=a_*$ を代入して $b=b_*$ が得られる。したがって3本のパラメータ直線は共通点 $(a_*,b_*)$ をもつ。元の点が相異なり、共通の直線が垂直でなければ、この共通点は一意である。

![一点に対するパラメータ直線と、共線な三点に対する交点](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci/2008/tokyo-ci-2007-hough-trajectories.svg)

解答用の作図例。左は $(x_0,y_0)=(1,4)$、右は同一直線 $y=x+3$ 上の $(-1,2),(1,4),(3,6)$ を使っている。これらの数値は作図用に選んだもので、原図の測定値ではない。

### (4)

まず $(a,b)$ 空間を格子に区切り、投票数を0にする。図2の各点 $(x_j,y_j)$ について、許容する各傾き $a$ に対する $b=y_j-ax_j$ を計算し、対応する格子へ1票を加える。同一直線上の点は同じパラメータ付近へ投票するため、2本の境界線に対応する2個のピークが生じる。近接ピークの重複を除いて大きなピーク $(a_1,b_1),(a_2,b_2)$ を選び、

$$\boxed{y=a_1x+b_1,\qquad y=a_2x+b_2}$$

を得る。量子化誤差や点の雑音があるため、ピークに近い直線を支持する点を集め、直交距離を最小にする直線当てはめで精密化してもよい。図には座標付きの実測点が与えられていないので、数値的な傾き・切片を一意には計算できない。

垂直線も統一的に扱うなら、法線形式 $\rho=x\cos\theta+y\sin\theta$ を使い、$(\theta,\rho)$ 空間へ投票する。これは有限の角度範囲で全方向を表す標準的な Hough 変換である。[OpenCV の説明](https://docs.opencv.org/4.x/d9/db0/tutorial_hough_lines.html)も、この形式と投票による直線検出を示している。
