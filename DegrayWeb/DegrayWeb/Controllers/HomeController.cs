using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DegrayWeb.Models;

namespace DegrayWeb.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Product()
    {
        return View();
    }
    public IActionResult Cart()
    {
        return View();
    }

    public IActionResult ProductDetail(string id)
    {
        // Bạn có thể lấy thông tin sản phẩm từ một nguồn dữ liệu tĩnh
        // hoặc truyền ID vào view để xử lý ở phía client
        ViewBag.ProductId = id;
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

