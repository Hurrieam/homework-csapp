import numpy as np
import matplotlib.pyplot as plt

x = np.arange(-2*np.pi, 2*np.pi, 0.0001*np.pi)
y = np.sin(x)
z = np.cos(x)

axis = 0*x

plt.plot(x, y, 'red', x, z, 'green', x, axis, 'black', axis, x, 'black')
plt.xlabel('x')
plt.ylabel('y')
plt.title('Trigonometry Functions')
plt.show()
