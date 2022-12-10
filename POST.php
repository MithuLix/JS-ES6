<?php
header("Content-type: application/jsonl; charset=UTF-8");
$obj = json_decode($_POST[x], false);

$conn = new mysqli("myServer", "myUser", "myPassword", "northWind");
$stmt = $conn->prepare("SELECT name FROM customers LIMIT?");
$stmt-> bind_param("s", $obj->limit);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp)
?>