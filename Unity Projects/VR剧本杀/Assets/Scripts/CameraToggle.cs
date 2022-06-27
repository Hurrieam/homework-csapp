using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// 用空格键切换摄像机（上帝角色控制）
public class CameraToggle : MonoBehaviour
{

    public Camera[] Cameras;
    private Camera CurrentCamera;
    private float DepthOfCurrentCamera;
    private int IndexOfCurrentCamera;
    private float tempDepth;

    // 获取当前摄像机
    private Camera getCurrentCamera(Camera[] Cameras)
    {
        // 遍历所有摄像机，depth最大的就是当前“起作用”的摄像机
        Camera maxCameraDepthOfCamera = Cameras[0];
        for (int i = 0; i < 4; i++)
        {
            if (Cameras[i].depth > maxCameraDepthOfCamera.depth)
            {
                maxCameraDepthOfCamera = Cameras[i];
            }
        }
        return maxCameraDepthOfCamera;
    }

    // 获取当前摄像机的depth
    private float getDepthOfCurrentCamera(Camera[] Cameras)
    {
        // 遍历所有摄像机，depth最大的就是当前“起作用”的摄像机
        Camera maxCameraDepthOfCamera = Cameras[0];
        for (int i = 0; i < 4; i++)
        {
            if (Cameras[i].depth > maxCameraDepthOfCamera.depth)
            {
                maxCameraDepthOfCamera = Cameras[i];
            }
        }
        return maxCameraDepthOfCamera.depth;
    }

    // 获取当前摄像机在摄像机数组中的角标（0为玩家1的摄像机，以此类推）
    private int getIndexOfCurrentCamera(Camera[] Cameras)
    {
        // 遍历所有摄像机，depth最大的就是当前“起作用”的摄像机
        Camera maxCameraDepthOfCamera = Cameras[0];
        int i;
        for (i = 0; i < 4; i++)
        {
            if (Cameras[i].depth > maxCameraDepthOfCamera.depth)
            {
                maxCameraDepthOfCamera = Cameras[i];
            }
        }
        return i - 1;
    }

    // Use this for initialization
    void Start()
    {
        CurrentCamera = getCurrentCamera(Cameras);
        DepthOfCurrentCamera = getDepthOfCurrentCamera(Cameras);
        IndexOfCurrentCamera = getIndexOfCurrentCamera(Cameras);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            tempDepth = Cameras[0].depth;
            for (int i = 0; i < Cameras.Length - 1; i++)
            {
                Cameras[i].depth = Cameras[i + 1].depth;
            }
            Cameras[Cameras.Length - 1].depth = tempDepth;
            // 更新全局变量
            Start();
            // 遍历摄像机数组内的所有摄像机，将全部摄像机的Audio Listener关闭
            for (int i = 0; i < Cameras.Length; i++)
            {
                Cameras[i].GetComponent<AudioListener>().enabled = false;
            }
            // 打开当前摄像机的Audio Listener
            CurrentCamera.GetComponent<AudioListener>().enabled = true;
        }
    }
}
