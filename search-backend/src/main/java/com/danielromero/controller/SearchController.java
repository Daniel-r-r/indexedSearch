package com.danielromero.controller;

import com.danielromero.model.Item;
import com.danielromero.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SearchController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/api/search")
    public List<Item> search(@RequestParam String query) {
        return itemRepository.findByNameContaining(query);
    }
}